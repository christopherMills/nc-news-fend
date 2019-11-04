import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import ArticleCard from '../article/ArticleCard';

export default class ArticlesList extends Component {
  state = {
    articleList: [],
    p: 1,
    limit: 10,
    isLoading: true,
    totalPages: undefined,
  };

  componentDidMount() {
    this.getArticleList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps || this.state.p !== prevState.p) {
      this.getArticleList();
    }
  }

  getArticleList = () => {
    const { sort_by, order, topic } = this.props;
    const { p, limit } = this.state;
    api
      .getArticles({
        p,
        limit,
        sort_by,
        order,
        topic,
      })
      .then((data) => {
        this.setState({
          articleList: data.articles,
          isLoading: false,
          totalPages: Math.ceil(data.totalArticles / limit),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changePage = (int) => {
    const { p, totalPages } = this.state;
    const requested = p + int;
    if (p + int > 0 && p + int <= totalPages) {
      this.setState({
        p: requested,
      });
    }
  };

  render() {
    const { isLoading, articleList } = this.state;
    const greaterThanSymbol = '>>';
    const lessThanSymbol = '<<';
    return (
      <div>
        {isLoading ? (
          <p id='isLoading'>Loading...</p>
        ) : (
          <>
            <ul className='artList'>
              {articleList.map((item) => {
                return <ArticleCard article={item} key={item.article_id} />;
              })}
            </ul>
            <p className='articleListFoot'>
              <button onClick={() => this.changePage(-1)}>
                [ {lessThanSymbol} ]
              </button>{' '}
              page {this.state.p} of {this.state.totalPages}{' '}
              <button onClick={() => this.changePage(1)}>
                [ {greaterThanSymbol} ]
              </button>
            </p>
            Items per page: {this.state.limit}
            <p></p>
          </>
        )}
      </div>
    );
  }
}

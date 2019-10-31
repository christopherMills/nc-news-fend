import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import ArticleCard from '../article/ArticleCard';
import './ArticlesList.css';

export default class ArticlesList extends Component {
  state = {
    articleList: [],
    p: 1,
    limit: 10,
    isLoading: true,
    totalPages: null,
  };

  componentDidMount() {
    this.getArticleList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.getArticleList();
    }
  }

  componentWillUnmount() {} // I'm guessing there was a plan for this, hmm?

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
      .then((articlesArray) => {
        this.setState({
          articleList: articlesArray,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { isLoading, articleList } = this.state;
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
              Page {this.state.p} of XXX | Limit: {this.state.limit}
            </p>
          </>
        )}
      </div>
    );
  }
}

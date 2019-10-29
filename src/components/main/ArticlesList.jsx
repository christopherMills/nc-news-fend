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
  };

  componentDidMount() {
    this.getArticleList();
  }

  getArticleList = () => {
    const { sort_by, order } = this.props;
    const { p, limit } = this.state;
    api
      .getArticles({
        p,
        limit,
        sort_by,
        order,
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
          <p>Loading...</p>
        ) : (
          <ul>
            {articleList.map((item) => {
              return <ArticleCard article={item} key={item.article_id} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

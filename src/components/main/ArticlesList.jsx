import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import ArticleCard from '../article/ArticleCard';

export default class ArticlesList extends Component {
  state = {
    articleList: [],
  };

  componentDidMount() {
    this.getArticleList();
  }

  getArticleList = () => {};

  render() {
    return (
      <homePage>
        <p>Hello</p>
      </homePage>
    );
  }
}

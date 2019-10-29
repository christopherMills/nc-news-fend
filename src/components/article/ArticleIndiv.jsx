import React, { Component } from 'react';
import * as api from '../../utils/api.js';

export default class ArticleIndiv extends Component {
  state = {
    isLoading: true,
    articleActual: null,
  };

  // getArticle(id) {
  //   return 5;
  // }
  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then((articleObj) => {
      this.setState({
        articleActual: articleObj,
        isLoading: false,
      });
    });
  }

  render() {
    return <div>th</div>;
  }
}

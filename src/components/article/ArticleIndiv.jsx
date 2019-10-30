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
        articleActual: articleObj.article,
        isLoading: false,
      });
    });
  }

  render() {
    const { isLoading, articleActual } = this.state;
    const jsDate = articleActual
      ? new Date(articleActual.created_at)
      : 'no_date';
    return isLoading ? (
      <p>Loading...</p>
    ) : (
      <div id='articleActual'>
        <h2>{articleActual.title}</h2>
        <p>{articleActual.body}</p>
        <div id='articleActualFooter'>
          <p>Votes: {articleActual.votes} [+] [-] </p>
          <p>Created: {String(jsDate)}</p>
          <p>Comments: ({articleActual.comment_count}) (show/hide)</p>
        </div>
      </div>
    );
  }
}

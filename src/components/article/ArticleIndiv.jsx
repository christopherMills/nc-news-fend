import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import * as helper from '../../utils/helper';
import Comments from '../comments/Comments.jsx';

export default class ArticleIndiv extends Component {
  state = {
    isLoading: true,
    articleActual: null,
    showComments: false,
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
          <p>
            {articleActual.author} | {helper.prettifyDate(jsDate)}
          </p>
          <hr id='horizLine' />
          <button
            disabled={this.state.showComments}
            onClick={() => {
              this.setState({
                showComments: true,
              });
            }}>
            Comments: ({articleActual.comment_count}){' '}
          </button>
        </div>
        {this.state.showComments ? (
          <Comments
            article_id={this.props.article_id}
            username={this.props.username}
          />
        ) : (
          ' '
        )}
      </div>
    );
  }
}

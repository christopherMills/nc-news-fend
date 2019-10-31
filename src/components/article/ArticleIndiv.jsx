import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import * as helper from '../../utils/helper';
import Comments from '../comments/Comments.jsx';

export default class ArticleIndiv extends Component {
  state = {
    isLoading: true,
    articleActual: undefined,
    votes: undefined,
    showComments: false,
    hasVoted: false,
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then(({ article }) => {
      console.log(article);
      this.setState({
        articleActual: article,
        votes: article.votes,
        isLoading: false,
      });
    });
  }

  handleVote(int) {
    const { article_id } = this.props;
    api.voteArticle(article_id, int);
    this.setState((currentState) => {
      return {
        votes: currentState.votes + int,
        hasVoted: true,
      };
    });
  }

  render() {
    const { isLoading, articleActual, hasVoted, votes } = this.state;
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
          <p>
            Votes: {votes}
            <button
              disabled={hasVoted}
              onClick={() => {
                this.handleVote(1);
              }}
              id='incVoteButton'>
              +
            </button>
            <button
              disabled={hasVoted}
              onClick={() => {
                this.handleVote(-1);
              }}
              id='decVoteButton'>
              -
            </button>
          </p>
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

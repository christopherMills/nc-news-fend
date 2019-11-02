import React, { Component } from 'react';
import * as api from '../../utils/api';
import * as helpers from '../../utils/helper';

export default class CommentCard extends Component {
  state = {
    votes: undefined,
    deleting: false,
    hasVoted: false,
    hasDeleted: false,
  };

  // handles deletion of a comment
  handleDelete = () => {
    const { comment_id } = this.props.commentObj;
    this.setState({
      deleting: true,
    });
    api
      .deleteComment(comment_id)
      .then((res) => {
        if (res.status === 204) {
          this.props.removeCommentFromParent(comment_id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handles votes on a comment
  handleVote(int) {
    const { comment_id } = this.props.commentObj;
    api.voteRequest('comments', comment_id, int);
    this.setState({
      votes: this.props.commentObj.votes + int,
      hasVoted: true,
    });
  }

  render() {
    const { commentObj } = this.props;
    const { hasVoted, votes, deleting } = this.state;
    const jsDate = commentObj.created_at
      ? new Date(commentObj.created_at)
      : 'no date';
    return (
      <li>
        <div id='commentBody'>{deleting ? 'deleting...' : commentObj.body}</div>
        <div id='commentMetadata'>
          <p>
            Votes: {votes || commentObj.votes}
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
          {commentObj.author === this.props.username ? (
            <button onClick={this.handleDelete}>delete</button>
          ) : (
            <p></p>
          )}
          <p>
            {commentObj.author} | {helpers.prettifyDate(jsDate)}
          </p>
        </div>
      </li>
    );
  }
}

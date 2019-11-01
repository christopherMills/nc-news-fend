import React, { Component } from 'react';
import * as api from '../../utils/api';
import * as helpers from '../../utils/helper';

export default class CommentCard extends Component {
  state = {
    commentObj: {},
    votes: undefined,
    hasVoted: false,
    hasDeleted: false,
  };

  componentDidMount() {
    this.setState({
      commentObj: this.props.commentObj,
      votes: this.props.commentObj.votes,
    });
  }

  // handles deletion of a comment
  handleClick = () => {
    const { comment_id } = this.state.commentObj;
    this.setState({
      commentObj: {
        body: 'Deleting...',
      },
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

  handleVote(int) {
    const { comment_id } = this.state.commentObj;
    api.voteComment(comment_id, int);
    this.setState((currentState) => {
      return {
        votes: currentState.votes + int,
        hasVoted: true,
      };
    });
  }

  render() {
    const { commentObj, hasVoted, votes } = this.state;
    const jsDate = commentObj.created_at
      ? new Date(commentObj.created_at)
      : 'no date';
    return (
      <li>
        <div id='commentBody'>{commentObj.body}</div>
        <div id='commentMetadata'>
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
          {commentObj.author === this.props.username ? (
            <button onClick={this.handleClick}>delete</button>
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

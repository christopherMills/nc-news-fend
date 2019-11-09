import React, { Component } from 'react';
import * as api from '../../utils/api';
import CommentCard from './CommentCard';
import ErrorHandler from '../errors/errorHandler';

export default class Comments extends Component {
  state = {
    comments: [],
    userInput: '',
    successfulInput: false,
    hasErrored: false,
    error: undefined,
  };

  // HELPER METHODS

  // submits the new comment
  handleSubmit = (event) => {
    event.preventDefault();
    api
      .postComment(
        this.props.article_id, //article ID
        this.state.userInput, // the body of the submission
        this.props.username // the username
      )
      .then(({ comment }) => {
        if (comment.comment_id) {
          this.setState((currentState) => {
            return {
              comments: [comment, ...currentState.comments],
              userInput: '',
              successfulInput: true,
            };
          });
        }
      })
      .catch((error) => {
        return error;
      });
  };

  // updates state with user input
  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  // remove a comment from local state
  removeComment = (comment_id) => {
    this.setState((currentState) => {
      return {
        comments: currentState.comments.filter((eachComment) => {
          return eachComment.comment_id !== comment_id;
        }),
      };
    });
  };

  // LIFECYCLE METHODS
  componentDidMount() {
    api
      .getComments(this.props.article_id)
      .then((comments) => {
        this.setState({
          comments,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  // RENDER
  render() {
    const { comments, error } = this.state;
    return this.state.hasErrored ? (
      <ErrorHandler
        statusCode={error.response.request.status}
        errorMsg='Sorry, we seem to be having a problem with our server'
      />
    ) : comments.length ? (
      <>
        <ul>
          {comments.map((commentObj) => {
            return (
              <CommentCard
                username={this.props.username}
                key={commentObj.comment_id}
                commentObj={commentObj}
                removeCommentFromParent={this.removeComment}
              />
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <h3>Add a comment:</h3>
          {this.state.successfulInput ? (
            <p id='inputSuccess'>Comment posted!</p>
          ) : (
            <>
              <input
                type='text'
                required={true}
                onChange={this.handleUserInput}
                value={this.state.userInput}
                placeholder='Enter text here'
              />
              <button disabled={this.state.successfulInput}>[Submit]</button>
            </>
          )}
        </form>
      </>
    ) : (
      <p>Loading...</p>
    );
  }
}

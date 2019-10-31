import React, { Component } from 'react';
import * as api from '../../utils/api';
import CommentCard from './CommentCard';

export default class Comments extends Component {
  state = {
    comments: [],
    userInput: '',
    successfulInput: false,
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

  // LIFECYCLE METHODS
  componentDidMount() {
    api.getComments(this.props.article_id).then((comments) => {
      this.setState({
        comments,
      });
    });
  }

  // RENDER
  render() {
    const { comments } = this.state;
    return comments.length ? (
      <>
        <ul>
          {comments.map((commentObj) => {
            return (
              <CommentCard
                username={this.props.username}
                key={commentObj.comment_id}
                commentObj={commentObj}
              />
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <h3>Add a comment:</h3>
          <input
            type='text'
            onChange={this.handleUserInput}
            value={this.state.userInput}
            placeholder='Enter text here'
          />
          <button disabled={this.state.successfulInput}>Submit</button>
          {this.state.successfulInput && (
            <p id='inputSuccess'>Comment posted successfully!</p>
          )}
        </form>
      </>
    ) : (
      <p>Loading...</p>
    );
  }
}

import React, { Component } from 'react';
import * as api from '../../utils/api';
import CommentCard from './CommentCard';

export default class Comments extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    api.getComments(this.props.article_id).then((comments) => {
      this.setState({
        comments,
      });
    });
  }

  render() {
    const { comments } = this.state;
    console.log('comments length is', comments.length);
    return comments.length ? (
      <ul>
        {comments.map((commentObj) => {
          return (
            <CommentCard key={commentObj.comment_id} commentObj={commentObj} />
          );
        })}
      </ul>
    ) : (
      <p>Loading...</p>
    );
  }
}

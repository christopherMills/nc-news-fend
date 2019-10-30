import React from 'react';
import * as helpers from '../../utils/helper';

export default function CommentCard({ commentObj }) {
  const jsDate = commentObj.created_at
    ? new Date(commentObj.created_at)
    : 'no date';
  return (
    <li>
      {console.log(Object.keys(commentObj))}
      <div id='commentBody'>{commentObj.body}</div>
      <div id='commentMetadata'>
        <p>Votes: {commentObj.votes} [+] [-]</p>
        <p>
          {commentObj.author} | {helpers.prettifyDate(jsDate)}
        </p>
      </div>
    </li>
  );
}

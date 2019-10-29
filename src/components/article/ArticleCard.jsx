import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <li className='artCard'>
      {/* <Link> */}
      <p id='cardTitle'>{article.title}</p>
      {/* </Link> */}
      <p>
        author: {article.author} | votes: {article.votes} | comments:
        {article.comment_count}
      </p>
    </li>
  );
};

export default ArticleCard;

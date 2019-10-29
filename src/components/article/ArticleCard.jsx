import React from 'react';
import { Link } from '@reach/router';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  // console.log(article);
  return (
    <li className='artCard'>
      <Link to={`/articles/${article.article_id}`}>
        <p id='cardTitle'>{article.title}</p>
      </Link>
      <p id='cardTitleMeta'>
        author: {article.author} | votes: {article.votes} | comments:
        {article.comment_count}
      </p>
    </li>
  );
};

export default ArticleCard;

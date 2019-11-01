import React from 'react';
import { Link } from '@reach/router';
import './ArticleCard.css';
import * as helper from '../../utils/helper';

const ArticleCard = ({ article }) => {
  return (
    <li className='artCard'>
      <Link to={`/articles/${article.article_id}`}>
        <p id='cardTitle'>{article.title}</p>
      </Link>
      <p id='cardTitleMeta'>
        by {article.author} on {helper.getShortDate(article.created_at)} |
        votes: {article.votes} | {article.comment_count} comments
      </p>
    </li>
  );
};

export default ArticleCard;

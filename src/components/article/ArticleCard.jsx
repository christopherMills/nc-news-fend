import React from 'react';

const ArticleCard = (props) => {
  return (
    <li className='artCard'>
      <h2>{props.article.title}</h2>
    </li>
  );
};

export default ArticleCard;

import axios from 'axios';

// Create an axios instance
const config = {
  baseURL: 'https://nc-news-bend.herokuapp.com/api',
};
const axiosRequest = axios.create(config);

// get an array of articles to put in article cards
export const getArticles = ({ sort_by, order, author, topic, limit, p }) => {
  return axiosRequest
    .get('/articles', {
      params: {
        sort_by,
        order,
        author,
        topic,
        limit,
        p,
      },
    })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
};

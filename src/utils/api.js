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
      return error;
    });
};

// get a single article to display when user has clicked on an article
export const getArticle = (id) => {
  return axiosRequest.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
};

// get a list of topics and return as an array
export const getTopics = () => {
  return axiosRequest
    .get(`/topics`)
    .then(({ data }) => {
      return data.topics;
    })
    .catch((error) => {
      return error;
    });
};

// get the comments for a given article
export const getComments = (article_id) => {
  return axiosRequest
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((error) => {
      return error;
    });
};

// post a comment
export const postComment = (article_id, text, user) => {
  return axiosRequest
    .post(`/articles/${article_id}/comments`, {
      articleID: article_id,
      username: user,
      body: text,
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// delete a comment by its UID
export const deleteComment = (commentID) => {
  return axiosRequest
    .delete(`/comments/${commentID}`)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// // sends a vote for a comment, which is a simple
// // -1 or +1
// export const voteComment = (commentID, int) => {
//   return axiosRequest
//     .patch(`/comments/${commentID}`, {
//       inc_votes: int,
//     })
//     .then((response) => {
//       console.log(response);
//       return response;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// // Increment / decrement the votecount
// // of an article by a specified integer
// export const voteArticle = (articleID, int) => {
//   return axiosRequest
//     .patch(`/articles/${articleID}`, {
//       inc_votes: int,
//     })
//     .then((response) => {
//       console.log(response);
//       return response;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const voteRequest = (endpointVar, id, int) => {
  return axiosRequest
    .patch(`/${endpointVar}/${id}`, {
      inc_votes: int,
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

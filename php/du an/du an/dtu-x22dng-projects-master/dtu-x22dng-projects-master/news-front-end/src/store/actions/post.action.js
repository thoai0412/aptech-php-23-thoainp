import { POST_FETCHED } from '../../helpers/constants';
import axios from '../../helpers/axios.config';

export const postFetchStart = slug => {
  return dispatch => {
    return axios.get(`posts/${slug}`).then(response => {
      if (response.data.status === 200) {
        const post = response.data.data.post;
        dispatch(postFetch(post));
      }
    });
  };
};

export const postFetch = data => {
  return {
    type: POST_FETCHED,
    data
  };
};

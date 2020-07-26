import axios from '../../helpers/axios.config';
import { TAGS_FETCHED } from '../../helpers/constants';

export const tagsFetchStart = () => {
  return dispatch => {
    return axios.get('tags').then(response => {
      if (response.data.status === 200) {
        const tags = response.data.data.tags;
        dispatch(tagsFetched(tags));
      }
    });
  };
};

export const tagsFetched = data => {
  return {
    type: TAGS_FETCHED,
    data
  };
};

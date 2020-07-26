import { CATEGORIES_FETCHED } from '../../helpers/constants';
import axios from '../../helpers/axios.config';
export const categoriesFetchStart = () => {
  return dispatch => {
    return axios.get('/category').then(response => {
      if (response.data.status === 200) {
        const categories = response.data.data.categories;
        dispatch(categoriesFetched({ categories }));
      }
    });
  };
};

export const categoriesFetched = state => {
  return {
    type: CATEGORIES_FETCHED,
    state
  };
};

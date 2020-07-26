import { MENUS_FETCHED } from '../../helpers/constants';
import axios from '../../helpers/axios.config';
export const menusFetchStart = () => {
  return dispatch => {
    return axios.get('/menus').then(response => {
      if (response.data.status === 200) {
        const menus = response.data.data.menus;
        dispatch(menusFetched({ menus }));
      }
    });
  };
};

export const menusFetched = state => {
  return {
    type: MENUS_FETCHED,
    state
  };
};

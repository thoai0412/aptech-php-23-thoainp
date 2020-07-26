import axios from '../../helpers/axios.config';
import {
  INFORMATION_FETCHED,
  INFORMATION_UPDATED
} from '../../helpers/constants';

export const informationFetchStart = () => {
  return dispatch => {
    return axios.get('/information').then(response => {
      if (response.data.status === 200) {
        const information = response.data.data.information;
        dispatch(informationFetched(information));
      }
    });
  };
};

export const informationFetched = data => {
  return {
    type: INFORMATION_FETCHED,
    data
  };
};

export const informationUpdateStart = data => {
  return dispatch => {
    return axios.put('/information', data).then(response => {
      if (response.data.status === 200) {
        const information = response.data.data.information;
        dispatch(informationUpdated(information));
      }
    });
  };
};

export const informationUpdated = data => {
  return {
    type: INFORMATION_UPDATED,
    data
  };
};

import {
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  CLIENT_LOG_OUT
} from '../../../helpers/constants';
import axios from '../../../helpers/axios.config';
import { parseToken } from '../../../helpers';

export const authStartLogIn = (loginData = {}, setting = {}) => {
  return dispatch => {
    const { email, password } = loginData;
    const credentials = { email, password };
    return axios.post('/login', credentials).then(response => {
      if (response.data.status === 200) {
        const token = response.data.data.token;
        localStorage.setItem('cz.token', token);
        dispatch(authLogIn(parseToken(token)));
      } else if (response.data.status === 401) {
        dispatch(authError(response.data.message));
      }
    });
  };
};

export const authError = message => {
  console.log(message);
};

export const authLogIn = auth => {
  axios.defaults.headers.Authorization = `Bearer ${auth.token}`;
  return {
    type: AUTH_LOG_IN,
    auth
  };
};

export const authRefreshToken = token => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return dispatch => {
    return axios.post('/refresh').then(response => {
      const token = response.data.data.token;
      if (token) {
        localStorage.setItem('cz.token', token);
        dispatch(authLogIn(parseToken(token)));
      }
    });
  };
};

export const authStartLogOut = () => {
  return dispatch => {
    axios.post('/logout').then(response => {
      // if (response.data.status === 200) {
      axios.defaults.headers.Authorization = null;
      localStorage.removeItem('cz.token');
      dispatch(authLogOut());
      dispatch(clientLogOut());
      // }
    });
  };
};

export const authLogOut = () => {
  return {
    type: AUTH_LOG_OUT
  };
};

export const clientLogOut = () => {
  return {
    type: CLIENT_LOG_OUT
  };
};

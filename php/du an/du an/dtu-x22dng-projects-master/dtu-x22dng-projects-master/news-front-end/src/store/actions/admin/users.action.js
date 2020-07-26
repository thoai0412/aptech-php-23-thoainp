import {
  USERS_FETCHED,
  USER_DELETED,
  USER_CREATED,
  USER_EDITED,
  USERS_DELETED_FETCHED,
  USER_DELETED_PERMANENTLY,
  USER_DELETED_RESTORED
} from '../../../helpers/constants';
import axios from '../../../helpers/axios.config';

export const usersFetchStart = () => {
  return dispatch => {
    return axios.get('users').then(response => {
      if (response.data.status === 200) {
        const users = response.data.data.users;
        dispatch(usersFetched(users));
      }
    });
  };
};

export const usersLinkFetchStart = link => {
  return dispatch => {
    return axios.get(link).then(response => {
      const users = response.data.data.users;
      dispatch(usersFetched(users));
    });
  };
};

export const usersFetched = users => {
  return {
    type: USERS_FETCHED,
    users
  };
};

export const usersDeletedFetchStart = () => {
  return dispatch => {
    return axios.get('users-deleted').then(response => {
      if (response.data.status === 200) {
        const users = response.data.data.users;
        dispatch(usersDeletedFetched(users));
      }
    });
  };
};

export const usersDeletedFetched = users => {
  return {
    type: USERS_DELETED_FETCHED,
    users
  };
};

export const userDeleteStart = id => {
  return dispatch => {
    return axios.delete(`/users/${id}`).then(response => {
      if (response.data.status === 200) {
        const data = response.data.data.user;
        dispatch(userDeleted(data));
      }
    });
  };
};

export const userDeleted = data => {
  return {
    type: USER_DELETED,
    data
  };
};

export const userDeletePermanentlyStart = id => {
  return dispatch => {
    return axios.delete(`users-deleted/${id}`).then(response => {
      if (response.data.status === 200) {
        dispatch(userDeletedPermanently(id));
      }
    });
  };
};

export const userDeletedPermanently = id => {
  return {
    type: USER_DELETED_PERMANENTLY,
    id
  };
};

export const userDeletedRestoreStart = id => {
  return dispatch => {
    return axios.put(`users-deleted/${id}`).then(response => {
      if (response.data.status === 200) {
        const { user } = response.data.data;
        dispatch(userDeletedRestored(user));
      }
    });
  };
};

export const userDeletedRestored = user => {
  return {
    type: USER_DELETED_RESTORED,
    user
  };
};

export const userCreateStart = user => {
  return dispatch => {
    return axios.post('/users', user).then(response => {
      if (response.data.status === 200) {
        const user = response.data.data.user;
        dispatch(userCreated(user));
      } else {
        return null;
      }
    });
  };
};

export const userCreated = data => {
  return {
    type: USER_CREATED,
    data
  };
};

export const userEditStart = (id, user) => {
  return dispatch => {
    return axios.put(`/users/${id}`, user).then(response => {
      if (response.data.status === 200) {
        const user = response.data.data.user;
        dispatch(userEdited(user));
      } else {
        return null;
      }
    });
  };
};

export const userEdited = data => {
  return {
    type: USER_EDITED,
    data
  };
};

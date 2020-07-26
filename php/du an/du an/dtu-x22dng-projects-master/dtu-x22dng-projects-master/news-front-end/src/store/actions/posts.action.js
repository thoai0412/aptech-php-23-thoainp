import {
  POSTS_FETCHED,
  POST_DELETED,
  POSTS_DELETED_FETCHED,
  POST_DELETED_PERMANENTLY,
  POST_DELETED_RESTORED,
  POST_CREATED,
  POST_UPDATED
} from '../../helpers/constants';
import axios from '../../helpers/axios.config';

export const postsFetchStart = (auth = false) => {
  return dispatch => {
    return axios.get(`posts?${auth ? 'auth=' + auth : ''}`).then(response => {
      if (response.data.status === 200) {
        const posts = response.data.data.posts;

        dispatch(postsFetched(posts));
      }
    });
  };
};

export const postsLinkFetchStart = link => {
  return dispatch => {
    return axios.get(link).then(response => {
      const posts = response.data.data.posts;
      dispatch(postsFetched(posts));
    });
  };
};

export const postsFetched = posts => {
  return {
    type: POSTS_FETCHED,
    posts
  };
};

export const postsCategoryFetchStart = slug => {
  return dispatch => {
    return axios.get(`posts?category=${slug}`).then(response => {
      if (response.data.status === 200) {
        const posts = response.data.data.posts;

        dispatch(postsCategoryFetched(posts));
      }
    });
  };
};

export const postsCategoryFetched = posts => {
  return {
    type: POSTS_FETCHED,
    posts
  };
};

export const postsDeletedFetchStart = () => {
  return dispatch => {
    return axios.get('posts-deleted').then(response => {
      if (response.data.status === 200) {
        const posts = response.data.data.posts;
        dispatch(postsDeletedFetched(posts));
      }
    });
  };
};

export const postsDeletedFetched = posts => {
  return {
    type: POSTS_DELETED_FETCHED,
    posts
  };
};

export const postDeleteStart = id => {
  return dispatch => {
    return axios.delete(`posts/${id}`).then(response => {
      if (response.data.status === 200) {
        const post = response.data.data.post;
        dispatch(postDeleted(post));
      }
    });
  };
};

export const postDeleted = post => {
  return {
    type: POST_DELETED,
    post
  };
};
export const postDeletePermanentlyStart = id => {
  return dispatch => {
    return axios.delete(`posts-deleted/${id}`).then(response => {
      if (response.data.status === 200) {
        dispatch(postDeletedPermanently(id));
      }
    });
  };
};

export const postDeletedPermanently = id => {
  return {
    type: POST_DELETED_PERMANENTLY,
    id
  };
};

export const postDeletedRestoreStart = id => {
  return dispatch => {
    return axios.put(`posts-deleted/${id}`).then(response => {
      if (response.data.status === 200) {
        const { post } = response.data.data;
        dispatch(postDeletedRestored(post));
      }
    });
  };
};

export const postDeletedRestored = post => {
  return {
    type: POST_DELETED_RESTORED,
    post
  };
};

export const postCreateStart = data => {
  return dispatch => {
    return axios.post('posts', data).then(response => {
      if (response.data.status === 200) {
        const post = response.data.data.post;
        dispatch(created(post));
      } else {
        return null;
      }
    });
  };
};

export const created = post => {
  return {
    type: POST_CREATED,
    post
  };
};

export const postUpdateStart = (id, data) => {
  return dispatch => {
    return axios.post(`posts/${id}`, data).then(response => {
      if (response.data.status === 200) {
        const post = response.data.data.post;
        dispatch(updated(post));
      }
    });
  };
};

export const updated = post => {
  return {
    type: POST_UPDATED,
    post
  };
};

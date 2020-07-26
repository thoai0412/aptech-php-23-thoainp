import {
  CATEGORIES_FETCHED,
  CATEGORY_DELETED,
  CATEGORY_CREATED,
  CATEGORIES_DELETED_FETCHED,
  CATEGORY_DELETED_PERMANENTLY,
  CATEGORY_DELETED_RESTORED,
  CATEGORY_EDITED
} from '../../../helpers/constants';
import axios from '../../../helpers/axios.config';

export const categoriesFetchStart = () => {
  return dispatch => {
    return axios.get('categories').then(response => {
      if (response.data.status === 200) {
        const categories = response.data.data.categories;

        dispatch(categoriesFetched(categories));
      }
    });
  };
};

export const categoriesFetched = categories => {
  return {
    type: CATEGORIES_FETCHED,
    categories
  };
};

export const categoriesDeletedFetchStart = () => {
  return dispatch => {
    return axios.get('categories-deleted').then(response => {
      if (response.data.status === 200) {
        const categories = response.data.data.categories;
        dispatch(categoriesDeletedFetched(categories));
      }
    });
  };
};

export const categoriesDeletedFetched = categories => {
  return {
    type: CATEGORIES_DELETED_FETCHED,
    categories
  };
};

export const categoryDeleteStart = id => {
  return dispatch => {
    return axios.delete(`categories/${id}`).then(response => {
      if (response.data.status === 200) {
        const category = response.data.data.category;
        dispatch(categoryDeleted(category));
      }
    });
  };
};

export const categoryDeleted = category => {
  return {
    type: CATEGORY_DELETED,
    category
  };
};

export const categoryDeletePermanentlyStart = id => {
  return dispatch => {
    return axios.delete(`categories-deleted/${id}`).then(response => {
      if (response.data.status === 200) {
        dispatch(categoryDeletedPermanently(id));
      }
    });
  };
};

export const categoryDeletedPermanently = id => {
  return {
    type: CATEGORY_DELETED_PERMANENTLY,
    id
  };
};

export const categoryDeletedRestoreStart = id => {
  return dispatch => {
    return axios.put(`categories-deleted/${id}`).then(response => {
      if (response.data.status === 200) {
        const { category } = response.data.data;
        dispatch(categoryDeletedRestored(category));
      }
    });
  };
};

export const categoryDeletedRestored = category => {
  return {
    type: CATEGORY_DELETED_RESTORED,
    category
  };
};

export const categoryEditStart = (id, category) => {
  return dispatch => {
    return axios.put(`categories/${id}`, category).then(response => {
      if (response.data.status === 200) {
        const category = response.data.data.category;
        dispatch(categoryEdited(category));
      }
    });
  };
};

export const categoryEdited = category => {
  return {
    type: CATEGORY_EDITED,
    category
  };
};

export const categoryCreateStart = data => {
  return dispatch => {
    return axios.post('categories', data).then(response => {
      if (response.data.status === 200) {
        const category = response.data.data.category;
        dispatch(categoryCreated(category));
      }
    });
  };
};

export const categoryCreated = category => {
  return {
    type: CATEGORY_CREATED,
    category
  };
};

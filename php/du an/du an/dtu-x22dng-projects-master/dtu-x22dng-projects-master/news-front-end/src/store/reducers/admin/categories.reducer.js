import {
  CATEGORY_DELETED,
  CATEGORIES_FETCHED,
  CATEGORY_CREATED,
  CATEGORIES_DELETED_FETCHED,
  CATEGORY_DELETED_PERMANENTLY,
  CATEGORY_DELETED_RESTORED,
  CATEGORY_EDITED
} from '../../../helpers/constants';
import {
  setDataToArray,
  pushDataToArray,
  removeDataFromArrayById,
  updateDataToArrayById
} from '../../../helpers';
import { initCategories } from '../../../helpers/seed-data';

const categoriesFetched = (state, action) => {
  return { ...state, current: action.categories };
};

const categoriesDeletedFetched = (state, action) => {
  return { ...state, deleted: setDataToArray(action.categories) };
};

const categoryDeleted = (state, action) => {
  return {
    ...state,
    current: removeDataFromArrayById(state.current, action.category.id),
    deleted: pushDataToArray(state.deleted, action.category)
  };
};

const categoryDeletedPermanently = (state, action) => {
  return {
    ...state,
    deleted: removeDataFromArrayById(state.deleted, action.id)
  };
};

const categoryDeletedRestored = (state, action) => {
  return {
    ...state,
    current: pushDataToArray(state.current, action.category),
    deleted: removeDataFromArrayById(state.deleted, action.category.id)
  };
};

const categoryCreated = (state, action) => {
  return { ...state, current: pushDataToArray(state.current, action.category) };
};

const categoryEdited = (state, action) => {
  return {
    ...state,
    current: updateDataToArrayById(state.current, action.category)
  };
};

const reducer = (state = initCategories, action) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return categoriesFetched(state, action);
    case CATEGORIES_DELETED_FETCHED:
      return categoriesDeletedFetched(state, action);
    case CATEGORY_DELETED:
      return categoryDeleted(state, action);
    case CATEGORY_DELETED_PERMANENTLY:
      return categoryDeletedPermanently(state, action);
    case CATEGORY_DELETED_RESTORED:
      return categoryDeletedRestored(state, action);
    case CATEGORY_CREATED:
      return categoryCreated(state, action);
    case CATEGORY_EDITED:
      return categoryEdited(state, action);

    default:
      return state;
  }
};

export default reducer;

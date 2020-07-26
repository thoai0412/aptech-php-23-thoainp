import {
  POSTS_FETCHED,
  POST_DELETED,
  POST_CREATED,
  POSTS_DELETED_FETCHED,
  POST_DELETED_PERMANENTLY,
  POST_DELETED_RESTORED,
  POST_UPDATED
} from '../../helpers/constants';
import {
  setDataToArray,
  removeDataFromArrayById,
  pushDataToArray,
  sortDescendingArrayById,
  updateDataToArrayById
} from '../../helpers';
import { initPosts } from '../../helpers/seed-data';

const fetched = (state, action) => {
  return {
    ...state,
    current: action.posts
  };
};

const deleted = (state, action) => {
  return {
    ...state,
    current: removeDataFromArrayById(state.current, action.post.id),
    deleted: sortDescendingArrayById(
      pushDataToArray(state.deleted, action.post)
    )
  };
};

const postsDeletedFetched = (state, action) => {
  return {
    ...state,
    deleted: sortDescendingArrayById(setDataToArray(action.posts))
  };
};

const deletedPermanently = (state, action) => {
  return {
    ...state,
    deleted: removeDataFromArrayById(state.deleted, action.id)
  };
};

const deletedRestored = (state, action) => {
  return {
    ...state,
    current: sortDescendingArrayById(
      pushDataToArray(state.current, action.post)
    ),
    deleted: removeDataFromArrayById(state.deleted, action.post.id)
  };
};

const postCreated = (state, action) => {
  return {
    ...state,
    current: sortDescendingArrayById(
      pushDataToArray(state.current, action.post)
    )
  };
};

const postUpdated = (state, action) => {
  return {
    ...state,
    current: {
      data: updateDataToArrayById(state.current.data, action.post)
    }
  };
};

const reducer = (state = initPosts, action) => {
  switch (action.type) {
    case POSTS_FETCHED:
      return fetched(state, action);
    case POST_DELETED:
      return deleted(state, action);
    case POSTS_DELETED_FETCHED:
      return postsDeletedFetched(state, action);
    case POST_DELETED_PERMANENTLY:
      return deletedPermanently(state, action);
    case POST_DELETED_RESTORED:
      return deletedRestored(state, action);
    case POST_CREATED:
      return postCreated(state, action);
    case POST_UPDATED:
      return postUpdated(state, action);
    default:
      return state;
  }
};

export default reducer;

import { POST_FETCHED } from '../../helpers/constants';
import { setDataToObject } from '../../helpers';
import { initPost } from '../../helpers/seed-data';

const postFetched = (state, action) => {
  return setDataToObject(action.data);
};

const reducer = (state = initPost, action) => {
  switch (action.type) {
    case POST_FETCHED:
      return postFetched(state, action);
    default:
      return state;
  }
};

export default reducer;

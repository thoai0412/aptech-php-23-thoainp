import { TAGS_FETCHED } from '../../helpers/constants';
import { sortDescendingArrayById, setDataToArray } from '../../helpers';
import { initTags } from '../../helpers/seed-data';

const fetched = (state, action) => {
  return {
    ...state,
    current: sortDescendingArrayById(setDataToArray(action.data))
  };
};
const reducer = (state = initTags, action) => {
  switch (action.type) {
    case TAGS_FETCHED:
      return fetched(state, action);
    default:
      return state;
  }
};

export default reducer;

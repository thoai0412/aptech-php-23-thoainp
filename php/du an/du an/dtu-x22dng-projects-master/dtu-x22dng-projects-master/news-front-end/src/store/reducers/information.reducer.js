import {
  INFORMATION_FETCHED,
  INFORMATION_UPDATED
} from '../../helpers/constants';
import { setDataToArray, replaceDataInArrayById } from '../../helpers';
import { initInformation } from '../../helpers/seed-data';

const fetched = (state, action) => {
  return setDataToArray(action.data);
};

const updated = (state, action) => {
  return replaceDataInArrayById(state, action.data);
};

const reducer = (state = initInformation, action) => {
  switch (action.type) {
    case INFORMATION_FETCHED:
      return fetched(state, action);
    case INFORMATION_UPDATED:
      return updated(state, action);
    default:
      return state;
  }
};

export default reducer;

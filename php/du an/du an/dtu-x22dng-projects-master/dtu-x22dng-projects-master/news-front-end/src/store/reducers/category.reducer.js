import { CATEGORIES_FETCHED } from '../../helpers/constants';
import { setDataToArray } from '../../helpers';
import { initCategories } from '../../helpers/seed-data';
const categoriesFetched = action => {
  return setDataToArray(action.state.categories);
};

const reducer = (state = initCategories, action) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return categoriesFetched(action);
    default:
      return state;
  }
};

export default reducer;

import { MENUS_FETCHED } from '../../helpers/constants';
import { setDataToArray } from '../../helpers';
import { initMenus } from '../../helpers/seed-data';
const menusFetched = action => {
  return setDataToArray(action.state.menus);
};

const reducer = (state = initMenus, action) => {
  switch (action.type) {
    case MENUS_FETCHED:
      return menusFetched(action);
    default:
      return state;
  }
};

export default reducer;

import { AUTH_LOG_IN, AUTH_LOG_OUT } from '../../../helpers/constants';
import { setDataToObject } from '../../../helpers';
import { initAuth } from '../../../helpers/seed-data';

const authLogIn = (state, action) => {
  return { ...action.auth };
};

const authLogOut = _ => {
  return setDataToObject(initAuth);
};

const reducer = (state = initAuth, action) => {
  switch (action.type) {
    case AUTH_LOG_IN:
      return authLogIn(state, action);
    case AUTH_LOG_OUT:
      return authLogOut();
    default:
      return state;
  }
};

export default reducer;

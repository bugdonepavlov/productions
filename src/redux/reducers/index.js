import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

/* eslint-disable */
import category from 'ducks/category';
import dishes from 'ducks/dishes';
import basket from 'ducks/basket';
import fetch from 'ducks/fetch';
/* eslint-enable */

export default combineReducers({
  router,
  fetch,
  basket,
  category,
  dishes,
});

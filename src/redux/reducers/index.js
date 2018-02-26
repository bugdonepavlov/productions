import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import basket from 'ducks/basket';
import fetch from 'ducks/fetch';

export default combineReducers({
  router,
  fetch,
  basket,
});

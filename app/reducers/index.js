// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import window1 from './window1';
import facets from './facets';
import searchpairs from './searchpairs';
import modal from './modal';

const rootReducer = combineReducers({
  modal,
  searchpairs,
  facets,
  window1,
  routing
});

export default rootReducer;

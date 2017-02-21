// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import window1 from './window1';
import facets from './facets';

const rootReducer = combineReducers({
  facets,
  window1,
  routing
});

export default rootReducer;

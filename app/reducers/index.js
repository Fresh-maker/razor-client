// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import window1 from './window1';

const rootReducer = combineReducers({
  window1,
  routing
});

export default rootReducer;

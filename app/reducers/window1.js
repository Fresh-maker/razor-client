// @flow
import { UPDATE_SEARCH, UPDATE_FACETS } from '../actions/window1';

export type window1StateType = {
  currentSearch: string,
  facets: Object
};

type actionType = {
  type: string,
  payload: string
};

export default function window1(state: Object = { currentSearch: 'Try Pink1 GENE', facets: {} },  action: Object = {type: '', payload: ''}) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return Object.assign({}, state, { currentSearch: action.payload });
    default:
      return state;
  }
}

// @flow
import { UPDATE_SEARCH, INCREMENT_COUNTER, DECREMENT_COUNTER, UPDATE_FACETS } from '../actions/window1';

export type window1StateType = {
  currentSearch: string
};

type actionType = {
  type: string
};

export default function window1(state: Object = {'currentSearch': 'Try Pink1 GENE', facets: {}}, action: actionType) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return Object.assign({}, state, {currentSearch: action.payload});
    default:
      return state;
  }
}

// @flow
import {
  SET_SEARCH_RESULTS_REQUESTED,
  SET_SEARCH_RESULTS,
  UPDATE_SEARCH,
  UPDATE_FACETS,
} from '../actions/window1';

export type window1StateType = {
  results: Array<Object>,
  isFetching: boolean,
  currentSearch: string,
  facets: Object
};

type actionType = {
  type: string,
  payload: string
};

const DEFAULT_SEARCH_RESULT = {
  "searchTerm": "",
  "year": "",
  "title": "No results",
  "journal": "",
  "fulltext": "",
  "previewText": "",
  "authors": [],
  "id": 0
}
export default function window1(state: Object = { currentSearch: 'Try Pink1 GENE', facets: {}, isFetching: false, results: [DEFAULT_SEARCH_RESULT]  },  action: Object = {type: '', payload: ''}) {
  switch (action.type) {
    case SET_SEARCH_RESULTS_REQUESTED:
      return Object.assign({}, state, { isFetching: action.payload });
    case SET_SEARCH_RESULTS:
      return Object.assign({}, state, { results: action.payload });
    case UPDATE_SEARCH:
      return Object.assign({}, state, { currentSearch: action.payload });
    default:
      return state;
  }
}

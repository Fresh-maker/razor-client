// @flow
import type { window1StateType } from '../reducers/window1';

export const SET_SEARCH_RESULTS_REQUESTED = 'SET_SEARCH_RESULTS_REQUESTED';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const UPDATE_SEARCH_PAIRS = 'UPDATE_SEARCH_PAIRS';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_FACETS = 'UPDATE_FACET';

export function updateSearch(searchText:string) {
  return {
    type: UPDATE_SEARCH,
    payload: searchText
  };
}
export function setSearchResultsRequested(isRequesting:boolean) {
  return {
    type: SET_SEARCH_RESULTS_REQUESTED,
    payload: isRequesting
  };
}
export function setSearchResults(results:Array<Object>) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  };
}
export function fetchSearchResults(searchText:string) {
  return function(dispatch, getState){
    dispatch(setSearchResultsRequested(true));
    fetch('https://razor-middleware-161518.appspot.com/search?q=meow')
      .then(response => response.json())
      .then(json => {
        dispatch(setSearchResultsRequested(false));
        dispatch(setSearchResults(json));
      });
  }
}

export function updateFacet(e:Object) {
  let payload = {};
  if (e.target.type === 'checkbox') {
    payload = {
      prop: e.target.name,
      value: e.target.value,
      action: e.target.checked ? 'add' : 'remove'
    };
  } else if (e.target.type === 'radio') {
    payload = {
      prop: e.target.name,
      value: e.target.value,
      action: 'replace'
    };
  }
  return {
    type: UPDATE_FACETS,
    payload
  };
}

export function addSearchPair({term, category}) {
  const payload = {
    term,
    category,
    action: 'add'
  };
  return {
    type: UPDATE_SEARCH_PAIRS,
    payload
  };
}

export function replaceSearchPair({term, category}) {
  const payload = {
    term,
    category,
    action: 'replace'
  };
  return {
    type: UPDATE_SEARCH_PAIRS,
    payload
  };
}
export function removeSearchPair({term, category}) {
  const payload = {
    term,
    category,
    action: 'remove'
  };
  return {
    type: UPDATE_SEARCH_PAIRS,
    payload
  };
}

export function popSearchPair() {
  const payload = {
    action: 'pop'
  };
  return {
    type: UPDATE_SEARCH_PAIRS,
    payload
  };
}

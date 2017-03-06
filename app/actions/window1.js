// @flow
import type { window1StateType } from '../reducers/window1';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_FACETS = 'UPDATE_FACET';

export function updateSearch(searchText:string) {
  return {
    type: UPDATE_SEARCH,
    payload: searchText
  };
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

// @flow
import type { window1StateType } from '../reducers/window1';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_FACETS= 'UPDATE_FACET';

export function updateSearch(e) {
  return {
    type: UPDATE_SEARCH,
    payload: e.target.value
  };
}

export function updateFacet(e) {
  let payload = {};
  if(e.target.type === 'checkbox'){
    payload = {
      prop: e.target.name,
      value: e.target.value,
      action: e.target.checked ? 'add' : 'remove'
    };
  } else if (e.target.type ==='radio'){
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

/* Left for signature example
export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: () => void, getState: () => counterStateType) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: () => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
*/

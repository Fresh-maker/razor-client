// @flow
import type { window1StateType } from '../reducers/window1';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export function updateSearch(e) {
  return {
    type: UPDATE_SEARCH,
    payload: e.target.value
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

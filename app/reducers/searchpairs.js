import { UPDATE_SEARCH_PAIRS } from '../actions/window1';

type actionType = {
  type: string,
  payload: Object
};

export default function searchpairs(state: Array<Object> = [], action = {type: '', payload: {}}) {
  switch (action.type) {
    case UPDATE_SEARCH_PAIRS:
      const newPairs = state;
      if (action.payload.action === 'add') {
        newPairs.push({
            term: action.payload.term,
            category: action.payload.category
        });
      } else if (action.payload.action === 'remove') {
        const index = newPairs.indexOf(action.payload);
        if (index > -1) {
          newPairs.splice(index, 1);
        }
      } else if (action.payload.action === 'pop') {
        // TODO feels wrong mutating an element of a "const" array like this
        newPairs.pop()
      } else if (action.payload.action === 'replace') {
        newPairs[newPairs.indexOf(action.payload)] = {
          term: action.payload.term,
          category: action.payload.category
        }
      }
      return Object.assign([], state, newPairs);
    default:
      return state;
  }
}

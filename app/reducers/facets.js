// @flow
import { UPDATE_SEARCH, INCREMENT_COUNTER, DECREMENT_COUNTER, UPDATE_FACETS } from '../actions/window1';

export type window1StateType = {
  currentSearch: string
};

type actionType = {
  type: string
};

export default function facets(state: Object = {}, action: actionType) {
  switch (action.type) {
    case UPDATE_FACETS:
      let newFacets = state;
      if(action.payload.action === "add") {
        if( typeof newFacets[action.payload.prop] === "undefined" ){
          newFacets[action.payload.prop] = [];
        }
        newFacets[action.payload.prop].push(action.payload.value)
      } else if(action.payload.action === "remove") {
        let index = newFacets[action.payload.prop].indexOf(action.payload.value);
        if(index> -1){
          newFacets[action.payload.prop].splice(index, 1);
        }

      } else if(action.payload.action === "replace") {
        newFacets[action.payload.prop] = action.payload.value
      }
      return Object.assign({}, state, newFacets);
    default:
      return state;
  }
}

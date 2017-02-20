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
    case UPDATE_FACETS:
      let newFacets = state.facets;
      function addOrInitArray(symbol,value){
        if(Array.isArray(symbol)){
          symbol.push(value)
        } else {
          symbol = [];
        }
      }
      if(action.payload.action === "add") {
        if( typeof newFacets[action.payload.prop] === "undefined" ){
          newFacets[action.payload.prop] = [];
        }
        console.log('newFacets,value is ',action.payload.value)
        newFacets[action.payload.prop].push(action.payload.value)
      } else if(action.payload.action === "remove") {
        let index = newFacets[action.payload.prop].indexOf(action.payload.value);
        if(index> -1){
          newFacets[action.payload.prop].splice(index, 1);
        }

      } else if(action.payload.action === "replace") {
        newFacets[action.payload.prop] = action.payload.value
      }
      console.log('newFacets,',newFacets)
      return Object.assign({}, state, { facets: newFacets });
    default:
      return state;
  }
}

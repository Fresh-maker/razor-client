// @flow
import { SHOW_MODAL, TOGGLE_MODAL } from '../actions/homepage';

type actionType = {
  type: string
};

export default function modal(state: Object = { isOpen: false }, action: actionType) {
  switch (action.type) {
    case SHOW_MODAL:
      const modalState = {
        isOpen: true
      };
      return Object.assign({}, state, modalState);
    case TOGGLE_MODAL:
      const toggleModalState = {
        isOpen: !state.isOpen
      };
      return Object.assign({}, state, toggleModalState);
    default:
      return state;
  }
}

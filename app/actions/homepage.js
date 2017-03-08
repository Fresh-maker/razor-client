// @flow
export const SHOW_MODAL = 'SHOW_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function showModal(modalType) {
  return {
    type: SHOW_MODAL,
    payload: { type: modalType }
  };
}
export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
    payload: { nothing: 'nothing' }
  };
}

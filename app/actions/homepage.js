// @flow
export const SHOW_MODAL = 'SHOW_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function showModal(e) {
  console.log('show modal');
  return {
    type: SHOW_MODAL,
  };
}
export function toggleModal(e) {
  return {
    type: TOGGLE_MODAL,
    payload: {'nothing': 'nothing'}
  };
}

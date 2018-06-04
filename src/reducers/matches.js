import { MATCHES_LOADED } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case MATCHES_LOADED:
      return [...action.matches];
    default:
      return state;
  }
}
import { SELECTED_WEEK_UPDATED } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case SELECTED_WEEK_UPDATED:
      return {
        ...state,
        selectedWeek: action.selectedWeek
      };
    default:
      return state;
  }
}
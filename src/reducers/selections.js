import { SELECTED_WEEK_UPDATED } from '../actions/types';
import { WEATHER_UPDATED } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case SELECTED_WEEK_UPDATED:
      return {
        ...state,
        selectedWeek: action.selectedWeek
      };
    case WEATHER_UPDATED:
        return {
          ...state,
          weather: action.weather
        };
    default:
      return state;
  }
}
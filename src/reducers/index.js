import {combineReducers} from 'redux';
import matches from './matches';
import selections from './selections';

export default combineReducers({
  matches,
  selections,
});
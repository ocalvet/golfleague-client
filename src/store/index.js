import {createStore} from 'redux';
import reducers from '../reducers';

export default () => {
  const store = createStore(reducers, {
    selections: {
      selectedWeek: new Date(2018, 5, 5),
      weather: 'loading...'
    },
    matches: []
  });
  return store;
}
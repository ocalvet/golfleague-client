import {createStore} from 'redux';
import reducers from '../reducers';

export default () => {
  const store = createStore(reducers, {
    selections: {
      selectedWeek: new Date(2018, 6, 5),
    },
    matches: [{
      id: 1,
      team1: 'Ovidio & John',
      team2: 'Steve & Mark',
      hole: 18    
    },{
      id: 2,
      team1: 'Ovidio & John',
      team2: 'Steve & Mark',
      hole: 1    
    },{
      id: 3,
      team1: 'Ovidio & John',
      team2: 'Steve & Mark',
      hole: 8    
    }]
  });
  return store;
}
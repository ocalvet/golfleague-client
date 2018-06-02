import React from 'react';
import MatchCard from '../MatchCard/MatchCard';

const MatchList = ({ scoreMatch }) => {
  const matches = [{
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
  },{
    id: 4,
    team1: 'Ovidio & John',
    team2: 'Steve & Mark',
    hole: 4    
  },{
    id: 5,
    team1: 'Ovidio & John',
    team2: 'Steve & Mark',
    hole: 6    
  }];
  return (
  <div>
    {matches.map(m => (
      <MatchCard key={m.id} match={m} onMatchSelected={() => scoreMatch(m)}/>
    ))}
  </div>
);
}

export default MatchList;
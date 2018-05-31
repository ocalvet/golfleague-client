import React from 'react';
import MatchCard from '../MatchCard/MatchCard';

const MatchList = () => {
  const matches = [{
    id: 1,
    team1: 'Ovidio & John',
    team2: 'Steve & Mark',
    hole: 18    
  }];
  return (
  <div>
    {matches.map(m => (
      <MatchCard match={m} />
    ))}
  </div>
);
}

export default MatchList;
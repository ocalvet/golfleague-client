import React from 'react';
import MatchCard from '../MatchCard/MatchCard';

const MatchList = ({ scoreMatch, matches }) => {
  return (
  <div>
    {matches.map(m => (
      <MatchCard key={m.id} match={m} onMatchSelected={() => scoreMatch(m)}/>
    ))}
  </div>
);
}

export default MatchList;
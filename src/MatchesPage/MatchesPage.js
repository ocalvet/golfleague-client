import React from 'react';
import MatchList from './MatchList/MatchList';

class MatchesPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Matches Page</h1>
        <MatchList />
      </div>
    )
  }
}

export default MatchesPage;
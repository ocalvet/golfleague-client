import React from 'react';

class ScoreMatchPage extends React.Component {
  render() {
    const { match } = this.props.location.state;
    return (
      <div>
        <h4>{match.team1} Vs. {match.team2}</h4>
        <p>Current Hole: {match.hole}</p>
      </div>
    )
  }
}

export default ScoreMatchPage;
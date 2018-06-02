import React from 'react';
import MatchList from './MatchList/MatchList';

class MatchesPage extends React.Component {
  render() {
    const {history} = this.props;
    return (
      <div>
        <h4>Matches Page</h4>
        <MatchList scoreMatch={(m) => {
          console.log('scoring', m) 
          history.push('/score', { match: m });
        }}/>
      </div>
    )
  }
}

export default MatchesPage;
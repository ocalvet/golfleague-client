import React from 'react';
import {connect} from 'react-redux';
import MatchList from './MatchList/MatchList';

class MatchesPage extends React.Component {
  render() {
    const {history, matches} = this.props;
    console.log('MATCHES', matches);
    return (
      <div>
        <h4>Matches Page</h4>
        <MatchList matches={matches} scoreMatch={(m) => {
          console.log('scoring', m) 
          history.push('/score', { match: m });
        }}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  matches: state.matches
});

export default connect(mapStateToProps)(MatchesPage);
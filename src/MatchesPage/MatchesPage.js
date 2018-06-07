import React from 'react';
import {connect} from 'react-redux';
import {getWeekSchedule} from '../shared/providers/schedule';
import {getTeams} from '../shared/providers/teams';
import {loadMatches} from '../actions/matches';
import MatchList from './MatchList/MatchList';

class MatchesPage extends React.Component {
  async componentDidMount() {
    try {
      const teams = await getTeams();
      const schedule = await getWeekSchedule(2);
      const {onMatchesLoaded} = this.props;
    console.log('sad', schedule, teams);
    onMatchesLoaded(schedule.matches);
    } catch (error) {
      console.log('ERROR', error);
    }
  }
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

const mapDisatchToProps = dispatch => ({
  onMatchesLoaded: (matches) => dispatch(loadMatches(matches))
});

export default connect(mapStateToProps, mapDisatchToProps)(MatchesPage);
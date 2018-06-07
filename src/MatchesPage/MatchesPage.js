import React from 'react';
import { connect } from 'react-redux';
import { getWeekSchedule } from '../shared/providers/schedule';
import { getTeams } from '../shared/providers/teams';
import { loadMatches } from '../actions/matches';
import MatchList from './MatchList/MatchList';
import * as _ from 'lodash';
import { Typography } from '@material-ui/core';

class MatchesPage extends React.Component {
  async componentDidMount() {
    try {
      const teams = await getTeams();
      console.log('TEAMS', teams);
      const schedule = await getWeekSchedule(2);
      const matches = _
        .chain(schedule.matches)
        .map(m => {
          const team1 = teams[m.team1 - 1];
          const team2 = teams[m.team2 - 1];
          return {
            id: m.id,
            hole: m.hole,
            team1: `${team1.players[0].name} & ${team1.players[1].name}`,
            team2: `${team2.players[0].name} & ${team2.players[1].name}`,
          }
        })
        .tap(console.log)
        .value();
      const { onMatchesLoaded } = this.props;
      onMatchesLoaded(matches);
    } catch (error) {
      console.log('ERROR', error);
    }
  }
  render() {
    const { history, matches } = this.props;
    console.log('MATCHES', matches);
    return (
      <div>
        <Typography variant="headline" component="h2" align="center" style={{ marginBottom: 15 }}>
          Matches
        </Typography>
        <MatchList matches={matches} scoreMatch={(m) => {
          console.log('scoring', m)
          history.push('/score', { match: m });
        }} />
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
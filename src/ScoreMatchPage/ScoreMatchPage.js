import React from 'react';
import {getHoles} from '../shared/providers/holes';
import * as _ from 'lodash';
import { Typography } from '@material-ui/core';
import PlayerHolePointsForm from './PlayerHolePointsForm/PlayerHolePointsForm';

class ScoreMatchPage extends React.Component {
  state = {
    holes: [],
    score: 4
  }
  async componentDidMount() {
    try {
      const holes = await getHoles();
      this.setState({ ...this.state, holes });
    } catch (e) {
      console.log('ERROR  getting holes', e);
    }
  }

  handleChange (event) {
    this.setState({
      ...this.state,
      score: event.target.value
    })
  }

  render() {
    const { match } = this.props.location.state;
    const hole = _.find(this.state.holes, { id: match.hole });
    let maxPoints = 8;
    if (hole) {
      maxPoints = hole.par === 3 ? 6 : 8;
    }
    return (
      <div>
        <h4 style={{ textAlign: 'center' }}>{match.team1.players[0].name} & {match.team1.players[1].name}</h4>
        <p style={{ textAlign: 'center' }}>Vs.</p> 
        <h4 style={{ textAlign: 'center' }}>{match.team2.players[0].name} & {match.team2.players[1].name}</h4>
        <p>Current Hole: {match.hole}</p>
        <Typography variant="title">Team {match.team1.id}</Typography>
        {match.team1.players.map((p, i) => <PlayerHolePointsForm key={i} player={p} maxPoints={maxPoints}></PlayerHolePointsForm>)}
        <Typography variant="title">Team {match.team2.id}</Typography>
        {match.team2.players.map((p, i) => <PlayerHolePointsForm key={i} player={p} maxPoints={maxPoints}></PlayerHolePointsForm>)}
      </div>
    )
  }
}

export default ScoreMatchPage;
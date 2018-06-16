import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getHoles} from '../shared/providers/holes';
import * as _ from 'lodash';

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
    let selections = null;
    if (hole) {
      const maxPoints = hole.par === 3 ? 6 : 8;
      const menuItems = _
        .range(1, maxPoints + 1)
        .map(p => <MenuItem key={p} value={p}>{p}</MenuItem>);
      selections = <form 
      // className={classes.root} 
      autoComplete="off"
      >
      <FormControl 
        // className={classes.formControl}
        >
        <h4 style={{ marginBottom: 0, marginTop: 17 }}>{match.team1.players[0].name}</h4>
        <InputLabel htmlFor="score">Score</InputLabel>
        <Select
          value={this.state.score}
          onChange={(e) => this.handleChange(e)}
          inputProps={{
            name: 'score',
            id: 'score',
          }}
        >
        {menuItems}
        <MenuItem value={0}>Pick Up</MenuItem>
        </Select>
      </FormControl>
    </form> 
    }
    return (
      <div>
        <h4 style={{ textAlign: 'center' }}>{match.team1.players[0].name} & {match.team1.players[1].name}</h4>
        <p style={{ textAlign: 'center' }}>Vs.</p> 
        <h4 style={{ textAlign: 'center' }}>{match.team2.players[0].name} & {match.team2.players[1].name}</h4>
        <p>Current Hole: {match.hole}</p>
        {selections}
      </div>
    )
  }
}

export default ScoreMatchPage;
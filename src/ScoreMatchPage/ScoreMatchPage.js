import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getHoles} from '../shared/providers/holes';
import * as _ from 'lodash';

class ScoreMatchPage extends React.Component {
  state = {
    holes: []
  }
  async componentDidMount() {
    try {
      const holes = await getHoles();
      this.setState({ ...this.state, holes });
    } catch (e) {
      console.log('ERROR  getting holes', e);
    }
  }

  render() {
    const { match } = this.props.location.state;
    const hole = _.find(this.state.holes, { id: match.hole });
    let selections = null;
    if (hole) {
      const maxPoints = hole.par === 3 ? 6 : 8;
      const menuItems = _.range(1, maxPoints + 1)
        .map(p => <MenuItem key={p} value={p}>{p}</MenuItem>);
      selections = <form 
      // className={classes.root} 
      autoComplete="off"
      >
      <FormControl 
        // className={classes.formControl}
        >
        <InputLabel htmlFor="score">Score</InputLabel>
        <Select
          value={match.hole}
          onChange={this.handleChange}
          inputProps={{
            name: 'score',
            id: 'score',
          }}
        >
        {menuItems}
        </Select>
      </FormControl>
    </form> 
    }
    return (
      <div>
        <h4>{match.team1} Vs. {match.team2}</h4>
        <p>Current Hole: {match.hole}</p>
        {selections}
      </div>
    )
  }
}

export default ScoreMatchPage;
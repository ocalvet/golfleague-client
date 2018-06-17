import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import * as _ from 'lodash';

class PlayerHolePointsForm extends React.Component {
  state = {
    score: ''
  }
  render() {
    const { player, maxPoints } = this.props;
    const menuItems = _
        .range(1, maxPoints + 1)
        .map(p => <MenuItem key={p} value={p}>{p}</MenuItem>);
    return (
      <form
        // className={classes.root} 
        autoComplete="off"
      >
      <h4 style={{ marginBottom: 0, marginTop: 17 }}>{player.name}</h4>
        <FormControl
        // className={classes.formControl}
        >
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
    )
  }
}

export default PlayerHolePointsForm;
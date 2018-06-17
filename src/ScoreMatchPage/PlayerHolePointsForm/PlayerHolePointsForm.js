import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import * as _ from 'lodash';
import { Typography } from '@material-ui/core';

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
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
        <Typography variant="subheading">{player.name}</Typography>
        <div style={{ flex: 1 }}></div>
        <form
          // className={classes.root} 
          autoComplete="off"
        >
          <FormControl
          // className={classes.formControl}
          >
            {/* <InputLabel htmlFor="score">Score</InputLabel> */}
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
      </div>
    )
  }
}

export default PlayerHolePointsForm;
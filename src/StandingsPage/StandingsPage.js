import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

let id = 0;
function createData(name, handicap, points) {
  id += 1;
  return { id, name, handicap, points };
}

const data = [
  createData('Team 18', 18, 17),
  createData('Team 3', 11, 16.3),
  createData('Team 2', 10, 16.0),
  createData('Team 13', 9, 5.4),
  createData('Team 7', 11, 6.9),
];
class StandingsPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4>Standings Page</h4>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell numeric>Handicap</TableCell>
                <TableCell numeric>Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell numeric>{n.handicap}</TableCell>
                    <TableCell numeric>{n.points}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

StandingsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StandingsPage);
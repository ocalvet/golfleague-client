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
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

let id = 0;
function createData(name, handicap, scores) {
  id += 1;
  return { id, name, handicap, scores };
}

const data = [
  createData('John Falcone', 18, [51,53,52,47,50]),
  createData('Ovidio Calvet', 11, [51,53,52,47,50]),
  createData('Mike Hudik', 10, [51,53,52,47,50]),
  createData('Chris Dennison', 9, [51,53,52,47,50]),
  createData('Chris Bennett', 11, [51,53,52,47,50]),
];
class ScoresPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4>Scores Page</h4>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell numeric>Latest Handicap</TableCell>
                {data[0].scores.map((s, i) => <TableCell numeric>Week {i+1}</TableCell>)}
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
                    {n.scores.map(s => <TableCell numeric>{s}</TableCell>)}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          </div>
        </Paper>
      </div>
    )
  }
}

ScoresPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScoresPage);
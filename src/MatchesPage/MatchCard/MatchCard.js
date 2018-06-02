import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  cardContainer: {
    marginBottom: 20
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


const MatchCard = ({ classes, match, matchSelected }) => {

    return (
      <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Starting Hole: {match.hole}
          </Typography>
          <Typography variant="headline" component="h2">
            {match.team1} <span style={{ fontWeight: 'bold' }}>Vs.</span> {match.team2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={matchSelected}>Score</Button>
        </CardActions>
      </Card>
    </div>
    )
}

MatchCard.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(MatchCard);
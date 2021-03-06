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


const MatchCard = ({ classes, match, onMatchSelected }) => {
    console.log('MATCH ---', match);
    return (
      <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Starting Hole: {match.hole}
          </Typography>
          <Typography variant="title" component="h2" align="center">
            {match.team1.players[0].name} & {match.team1.players[1].name}       
          </Typography>
          <Typography variant="subheading" component="h2" align="center">
            <span style={{ fontWeight: 'bold' }}>Vs.</span>
          </Typography>
          <Typography variant="title" component="h2" align="center">
            {match.team2.players[0].name} & {match.team2.players[1].name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onMatchSelected}>Score</Button>
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
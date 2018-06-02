import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import RoomIcon from '@material-ui/icons/Room';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MatchesPage from './MatchesPage/MatchesPage';
import styles from './AppStyles';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import StandingsPage from './Standings/StandingsPage';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';


class App extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  };

  constructor(props) {
    super(props)
    this.router = undefined;
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  navigate(to) {
    this.router.history.push(to);
    this.handleDrawerClose();
  }

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    return (
      <Router ref={el => this.router = el}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Header open={open} anchor={anchor} handleDrawerOpen={this.handleDrawerOpen}/>
            <Drawer
              variant="persistent"
              anchor={anchor}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List component="nav">
                <ListItem button onClick={() => this.navigate('/')}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Home" />
                </ListItem>
                <ListItem button onClick={() => this.navigate('/matches')}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Matches" />
                </ListItem>
                <ListItem button onClick={() => this.navigate('/standings')}>
                  <ListItemIcon>
                    <SupervisorAccountIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Standings" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <RoomIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Scores" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Schedule" />
                </ListItem>
              </List>
            </Drawer>
            <main
              className={classNames(classes.content, classes[`content-${anchor}`], {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open,
              })}
            >
              <div className={classes.drawerHeader} />
              <Route exact path="/" component={HomePage} />
              <Route path="/matches" component={MatchesPage} />
              <Route path="/standings" component={StandingsPage} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);

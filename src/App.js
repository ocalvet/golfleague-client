import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MatchesPage from './MatchesPage/MatchesPage';
import styles from './AppStyles';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import StandingsPage from './Standings/StandingsPage';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';


class App extends React.Component {
  state = {
    open: false
  };

  constructor(props) {
    super(props)
    this.router = undefined;
    this.navigate = this.navigate.bind(this);
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  navigate(to) {
    console.log(this);
    this.router.history.push(to);
    this.handleDrawerClose();
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Router ref={el => this.router = el}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Header open={open} handleDrawerOpen={this.handleDrawerOpen}/>
            <SideMenu open={open} handleDrawerClose={this.handleDrawerClose} navigate={this.navigate}/>
            <main
              className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: open,
                [classes[`contentShift-left`]]: open,
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

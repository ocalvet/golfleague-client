import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './AppStyles';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { updateWeather } from './actions/selections';
import {OPEN_WEATHER_APIKEY} from './shared/secrets';
import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';
import MatchesPage from './MatchesPage/MatchesPage';
import StandingsPage from './StandingsPage/StandingsPage';
import ScoresPage from './ScoresPage/ScoresPage';
import SchedulePage from './SchedulePage/SchedulePage';
import HomePage from './HomePage/HomePage';
import ScoreMatchPage from './ScoreMatchPage/ScoreMatchPage';

class App extends React.Component {
  
  state = {
    isDrawerOpen: false
  };

  constructor(props) {
    super(props)
    this.router = undefined;
    this.navigate = this.navigate.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  async componentDidMount() {
    try {
      const {onWeatherUpdated} = this.props;
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=33445,us&APPID=${OPEN_WEATHER_APIKEY}&units=imperial`);
      const weatherData = await response.json();
      console.log('weather data', weatherData);
      const weatherString = `Wind Speed: ${weatherData.wind.speed}, Temp: ${weatherData.main.temp}, Description: ${weatherData.weather[0].description}`;
      onWeatherUpdated(weatherString);
    } catch (e) {
      console.log('ERROR', e);
    }
  }

  handleDrawerOpen = () => {
    this.setState({ isDrawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ isDrawerOpen: false });
  };

  navigate(to) {
    this.router.history.push(to);
    this.handleDrawerClose();
  }

  render() {
    const { classes } = this.props;
    const { isDrawerOpen } = this.state;

    return (
      <Router ref={el => this.router = el}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Header drawerOpen={isDrawerOpen} handleDrawerOpen={this.handleDrawerOpen}/>
            <SideMenu drawerOpen={isDrawerOpen} handleDrawerClose={this.handleDrawerClose} navigate={this.navigate}/>
            <main
              className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: isDrawerOpen,
                [classes[`contentShift-left`]]: isDrawerOpen,
              })}
            >
              <div className={classes.drawerHeader} />
              <Route exact path="/" component={HomePage} />
              <Route path="/matches" component={MatchesPage} />
              <Route path="/standings" component={StandingsPage} />
              <Route path="/scores" component={ScoresPage} />
              <Route path="/schedule" component={SchedulePage} />
              <Route path="/score" component={ScoreMatchPage} />
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onWeatherUpdated: weather => dispatch(updateWeather(weather))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));

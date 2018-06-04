import React from 'react';
import {connect} from 'react-redux';

class HomePage extends React.Component {
  render() {
    const { selectedWeek, weather } = this.props;
    return (
      <div>
        <p>
          Welcome to the NCCI Golf League App. With this app you can score a game, check the schedule and see current standings.
          You can also check the weather and see if the game is canceled or not
        </p>
        <p>Next Round: {selectedWeek.toLocaleDateString("en-US")}</p>
        <p>Weather: {weather}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedWeek: state.selections.selectedWeek,
  weather: state.selections.weather,
});

export default connect(mapStateToProps)(HomePage);
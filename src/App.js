import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Golf League Client Application</h1>
        <Button variant="raised" color="primary">
          Test button
        </Button>
      </div>
    );
  }
}

export default App;

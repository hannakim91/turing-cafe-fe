import React, { Component } from 'react';
import RezContainer from '../RezContainer/RezContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <RezContainer />
          
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
//import logo from './logo.svg';
import Calendar from './components/Big-Calendar'
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
          <Calendar />
            
      </div>
    );
  }
}

export default App;

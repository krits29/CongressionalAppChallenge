import React, { Component } from 'react';
import './App.css';
import Event from "./Event/Event";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Party Planner</h1>
          <h2>Event Dashboard</h2>
        </header>
        <h1 className="body">My Events</h1>
        <div className="row">
          <p className="column">Event</p>
          <p className="column">Time</p>
        </div>
        <Event eventName="Sally's Bday" eventTime="1:00pm"/>
        <Event eventName="Casie's Baby Shower" eventTime="4:00pm"/>
        <Event eventName="Nellie's Graduation" eventTime="7:00pm"/>
        <button>+Add New Event</button>
      </div>
    );
  }
}

export default App;

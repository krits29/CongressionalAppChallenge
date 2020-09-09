import React, { Component } from 'react';
import './App.css';
import Event from "./Event/Event";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import EventDashboard from './EventDashboard/EventDashboard';
import GuestList from './GuestList/GuestList.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path = "/" exact component = {EventDashboard}/>
          <Route path = "/guestlist" exact component = {GuestList}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

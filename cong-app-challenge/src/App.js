import React, { Component } from 'react';
import './App.css';
import Event from "./Event/Event";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import EventDashboard from './EventDashboard/EventDashboard';
import GuestList from './GuestList/GuestList.js';
import CreateNewEvent from "./CreateNewEvent/CreateNewEvent.js";
import ChooseEventType from "./ChooseEventType/ChooseEventType.js";
import VirtualPlatform from "./VirtualPlatform/VirtualPlatform.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path = "/" exact component = {EventDashboard}/>
          <Route path = "/guestlist" exact component = {GuestList}/>
          <Route path="/createnewevent" exact component={CreateNewEvent} />
          <Route path="/chooseeventtype" exact component={ChooseEventType} />
          <Route path="/virtualplatform" exact component={VirtualPlatform} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import EventDashboard from "./EventDashboard/EventDashboard";
import GuestList from "./GuestList/GuestList.js";
import CreateNewEvent from "./CreateNewEvent/CreateNewEvent.js";
import ChooseEventType from "./ChooseEventType/ChooseEventType.js";
import VirtualPlatform from "./VirtualPlatform/VirtualPlatform.js";
import VirtualChoose from "./VirtualChoose/VirtualChoose.js";
import VirtualActivityDiagnostic from "./VirtualActivityDiagnostic/VirtualActivityDiagnostic.js";
import NewGuest from "./NewGuest/NewGuest.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={EventDashboard} />
          <Route path="/guestlist" exact component={GuestList} />
          <Route path="/createnewevent" exact component={CreateNewEvent} />
          <Route path="/chooseeventtype" exact component={ChooseEventType} />
          <Route path="/virtualplatform" exact component={VirtualPlatform} />
          <Route path="/virtualchoose" exact component={VirtualChoose} />
          <Route path="/newguest" exact component={NewGuest} />
          <Route
            path="/virtualactivitydiagnostic"
            exact
            component={VirtualActivityDiagnostic}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

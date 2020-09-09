import React, { Component } from "react";
import { Link } from "react-router-dom";
import Guest from "../Guest/Guest.js";

class GuestList extends Component {
    render() {
        return(
            <div className="App">
            <header className="App-header">
              <h1 className="App-title"><Link to = "/">Party Planner</Link></h1>
              <h2>Guest List</h2>
            </header>
            <h1 className="body">Guest Count</h1>
            <div className="row">
              <p className="column">Name</p>
              <p className="column">Email</p>
              <p className="column">Status</p>
            </div>
            <Guest guestName="Jane" guestEmail="jane@gmail.com" guestStatus="Accepted"/>
            <Guest guestName="Nancy" guestEmail="nancy@gmail.com" guestStatus="Accepted"/>
            <Guest guestName="Jooe" guestEmail="jooe@gmail.com" guestStatus="Pending"/>
            <Guest guestName="Pablo" guestEmail="pablo@yahoo.com" guestStatus="Accepted"/>
            <Guest guestName="Bree" guestEmail="bree@gmail.com" guestStatus="Pending"/>
            <button>+New Guest</button>
          </div>
        );
    }
}

export default GuestList;
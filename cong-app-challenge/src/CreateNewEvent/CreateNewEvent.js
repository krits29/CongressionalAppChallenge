import React, { Component } from "react";
import { Link } from "react-router-dom";
//import CarbonDatePicker from "react-carbon-datepicker";

class CreateNewEvent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2>Create New Event</h2>
        </header>
        <h1 className="body">Create New Event</h1>


        <div className="row">
          <p className="column"><label for="name">Event Name:</label></p>
          <p className="column">Date</p>
          <p className="column">Time</p>
        </div>

        <div classname="row">
          <input className="column" type="text" id="name" name="name"/>
        
          <input className="column" type="date" />
          <input className="column" type="time" />
        </div>
      

        <button>
          <Link to={{ pathname: "/" }}>Back to Event Dashboard</Link>
        </button>

        <button>
          <Link to={{ pathname: "/chooseeventtype" }}>Next</Link>
        </button>
      </div>
    );
  }
}

export default CreateNewEvent;
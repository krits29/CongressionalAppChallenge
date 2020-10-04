import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewGuest extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2>Add New Guest</h2>
        </header>
        <h1 className="body">Add New Guest</h1>

        <div className="row">
          <p className="column">
            <label for="name">Guest Name:</label>
          </p>
          <p className="column">Email Address:</p>
        </div>

        <div classname="row">
          <input className="column" type="text" id="name" name="name" />
          <input className="column" type="text" id="email" name="email" />
        </div>

        <button>
          <Link to={{ pathname: "/guestlist" }}>Add Guest</Link>
        </button>
      </div>
    );
  }
}

export default NewGuest;

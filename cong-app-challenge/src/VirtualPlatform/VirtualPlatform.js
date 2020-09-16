import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Question } from "react-multiple-choice";
import { Option } from "react-multiple-choice";
import { Test } from "react-multiple-choice";
import { QuestionGroup } from "react-multiple-choice";
import "./VirtualPlatform.css";

class VirtualPlatform extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Party Planner</Link>
          </h1>
          <h2>Virtual Platform</h2>
        </header>
        <h1 className="body">Choose Virtual Platform</h1>

        <Test
          className="platforms"
          onOptionSelect={(selectedOptions) =>
            this.setState({ selectedOptions })
          }
        >
          <div className="better">
            <QuestionGroup questionNumber={0}>
              <Question>Platform</Question>
              <Option value="0">Zoom</Option>

              <Option value="1">GoToMeeting</Option>
              <Option value="2">Teams</Option>
              <Option value="3">Google Meet</Option>
            </QuestionGroup>
          </div>
        </Test>
        <br />

        <button>
          <Link to={{ pathname: "/virtualchoose" }}>Next</Link>
        </button>
      </div>
    );
  }
}

export default VirtualPlatform;

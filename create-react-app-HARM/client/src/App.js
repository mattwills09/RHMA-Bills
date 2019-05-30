
import React, { Component } from "react";
import SignUp from "./pages/SignUp"

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (

    <div>

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HARM Enterprises</h2>
        </div>
      </div>

      
      <SignUp />


    </div>

    );
  }
}

export default App;


import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn";
// import Dashboard from "./pages/Dashboard";
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

      {/* <Router> */}

      <div>

      <SignUp />

      <LogIn />

        {/* <Switch> */}

          {/* <Route exact path="/" component={LogIn} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}

          {/* </Switch> */}

</div>

{/* </Router> */}
      
    </div>

    );
  }
}

export default App;

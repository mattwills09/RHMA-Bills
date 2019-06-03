import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import logo from "./logo.svg";

import "./App.css";


class App extends Component {
  state = {
    loggedIn: false,
    username: null
  }

  // this.getUser = this.getUser.bind(this)
  // this.componentDidMount = this.componentDidMount.bind(this)
  // this.updateUser = this.updateUser.bind(this)

componentDidMount() {
  this.getUser()
}

updateUser(userObject) {
  this.setState(userObject)
}

getUser() {
  axios.get("/api/user/").then(response => {
    console.log("Get User Response: ")
    console.log(response.data)

    if (response.data.user) {
      console.log("Get User: There is a user saved in the server session: ")

      this.setState({
        loggedIn: true,
        username: response.data.user.username
      })
    } else {
      console.log("Get User: No username found");
      
      this.setState({
        loggedIn: false,
        username: null
      })
    }
  })
}

  render() {
    return (

    <div>

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HARM Enterprises</h2>
        </div>
      </div>

      <Router>

      <div>

        <Switch>

          <Route
            path="/login"
            render={() =>
          
            <LogIn
              updateUser={this.updateUser}
            />}

          />

          <Route
            path="/signup"
            render={() =>
            
            <SignUp/>}
          />

          <Route exact path="/" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />

        </Switch>

      </div>

      </Router>
      
    </div>

    );
  }
}


export default App;

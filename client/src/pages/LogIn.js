
import React, { Component } from "react";
import Form from "../components/LogInForm";
import axios from "axios";

class LogIn extends Component {
    state = {
      username: "",
      password: "",
      message: "Enter Username and Password to Log In."
    };

    updateUser() {

    }
   
    handleLogInInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
      }
    
    handleLogInSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        // this.registerUser();

        axios.post("/api/user/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response);

                if (response.data) {
                    console.log("Successful Log In.");
                    // this.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    this.setState({
                        redirectTo: "/dashboard"
                    })
                } else {
                    console.log("Log In Error");

                }
            }).catch(error => {
                console.log("Log In Server Error!");
                console.log(error);

            })
    }

    render() {
        return (

            <div>

                <h1 className="text-center">
                    <strong>HARM Enterprises Financial Help</strong>
                </h1>

                <h2 className="text-center">We're here to help.. we promise.</h2>

                <Form
                    handleLogInInputChange={this.handleLogInInputChange}
                    handleLogInFormSubmit={this.handleLogInSubmit}
                    username={this.state.username}
                    password={this.state.password}
                />

            </div>
        );
    }
}


export default LogIn;

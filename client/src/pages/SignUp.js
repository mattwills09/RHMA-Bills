
import React, { Component } from "react";
import Form from "../components/SignUpForm";
// import API from "../utils/API";
import axios from "axios";


class SignUp extends Component {
    state = {
      username: "",
      password: "",
      message: "Enter Username and Password to Begin!"
    };

   
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
      }
    
    // registerUser = () => {
    //     API.registerUser(this.state.username, this.state.password)
    //         .then(res =>
    //             this.setState({
    //                 username: res.data
    //             })
    //         )
    //         .catch(() =>
    //             this.setState({
    //                 username: "",
    //                 message: "No Username Found, Try a Different Query"
    //             })
    //         );
    // };
    
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        
        // this.registerUser();

        axios.post("/api/user", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response);

                if (response.data) {
                    console.log("Successful Sign Up!");
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    this.setState({
                        redirectTo: "/"
                    })
                } else {
                    console.log("Sign Up Error");

                }
            }).catch(error => {
                console.log("Sign Up Server Error!");
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
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    username={this.state.username}
                    password={this.state.password}
                />

            </div>
        );
    }
}


export default SignUp;
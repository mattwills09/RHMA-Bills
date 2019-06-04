import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class LogOutButton extends Component {
    state = {
        redirect: false
    }

    handleLogOutButton = event => {
        event.preventDefault();

            this.setState({
                redirectTo: "/login"
            })

        // setLogOut = () => {
        //     this.setState({
        //         redirect: true
        //     })
        // }

        // renderLogOut = () => {
        //     if (this.state.redirect) {
        //       return <Redirect to='/login' />
        //     }
        // }
    
    }

  
    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {

        return (
        
            <div className="pull-right">

                <button
                    onClick={this.setLogOut}
                    type="submit"
                    className="btn btn-lg btn-warning float-right"
                >
                    Log Out
                </button>

            </div>

        );
        }
    }
}

  
export default LogOutButton;


import React from "react";

function LogInForm({ username, password, handleLogInInputChange, handleLogInSubmit })  
    {
    return (
        <form>
        <div className="form-group">

            <label htmlFor="username">
                <strong>Log In Page</strong>
            </label>

            <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Input Username.."
                onChange={handleLogInInputChange}
                required={true}
            />

            <input
                className="form-control"
                type="text"
                id="password"
                name="password"
                value={password}
                placeholder="Input Password.."
                onChange={handleLogInInputChange}
                required={true}
            />

        </div>
        
        <div className="pull-right">
            <button
                onClick={handleLogInSubmit}
                type="submit"
                className="btn btn-lg btn-danger float-right"
            >
                Log In
            </button>
        </div>
    </form>
  );
}


export default LogInForm;

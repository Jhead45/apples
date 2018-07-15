import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return (
            <div className="">
                <div className="row">
                    <h1 className="col align-self-center font-weight-bold display-2 text-info">Covalence MeetUp</h1>
                </div>
                <div className="row">
                    <nav className="navbar navbar-expand-lg col-md-12 navbar-light bg-light">
                        <Link className="font-weight-bold text-info col-md-3" to="/logout">Logout</Link>
                        <Link className="font-weight-bold text-info col-md-3" to="/">Home</Link>
                        <Link className="font-weight-bold text-info col-md-3" to="/profiles">Profiles</Link>
                        <Link className="font-weight-bold text-info col-md-3" to="/accountView">My Account</Link>
                    </nav>
                </div>
            </div>
        
        )
        
        
    } else {
        return (
        <div className="">
            <div className="row">
                <h1 className="col align-self-center font-weight-bold display-2 text-info">Covalence MeetUp</h1>
            </div>
            <div className="row">
                <nav className="navbar navbar-expand-lg col-md-12 navbar-light bg-light">
                    <Link className="font-weight-bold text-info col-md-6" to="/signup">Sign Up</Link>
                    <Link className="font-weight-bold text-info col-md-6" to="/login">Login</Link>
                </nav>
            </div>
        </div>

        )
        
    }
};

export default AuthButton;
import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return (
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg col-md-12 navbar-light bg-light">
                        <Link className="btn btn-info" to="/logout">Logout</Link>
                        <Link className="btn btn-info" to="/profiles">Profiles</Link>
                        <Link className="btn btn-info" to="/accountView">My Account</Link>
                    </nav>
                </div>
            </div>
        
        )
        
        
    } else {
        return (
        <div className="container">
            <div className="row">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="btn btn-info" to="/login">Login</Link>
                </nav>
            </div>
        </div>

        )
        
    }
};

export default AuthButton;
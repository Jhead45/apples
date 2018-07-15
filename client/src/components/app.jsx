import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Suggestions from './suggestions';
import News from './news';
import AccountView from './accountView';
import Profiles from './profiles';
import Signup from './signUp';

import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route path="/signup" component={Signup} />
                        <PrivateRoute path="/profiles" component={Profiles} />
                        <PrivateRoute path="/accountView" component={AccountView} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;
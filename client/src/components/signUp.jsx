import React, { Component } from 'react';
import { render } from 'react-dom';
// import * as blogService from '../services/blog';
import * as userService from '../services/user';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            consent: ''
        };
    }

    onInputChange(value) {
        this.setState({ name: value });
    }

    onInputChange2(value) {
        this.setState({ email: value });
    }

    onInputChange3(value) {
        this.setState({ password: value });
    }

    // onInputChange4(value) {
    //     this.setState({ checked: value });
    // }

    handleForm(event, name, email, password) {
        event.preventDefault();
        console.log(this.state);

        userService.signup(this.state.name, this.state.email, this.state.password)
            .then((result) => {
                this.props.history.replace(`/Home`);
                console.log(this.state);
            });
    }

    render() {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
        return (

        <div className="form col-md-12">
            <form
                className="form-control-lg"
                onSubmit={(event) =>
                    this.handleForm(
                        event,
                        this.state.name,
                        this.state.email,
                        this.state.password
                        )
                    } 
                >
                <div className="row">
                    <h1 className=" font-weight-bold col">Sign Up!</h1>
                </div>
                <div className="row">
                    <input
                        className="col"
                        placeholder="username"
                        value={this.state.name}
                        onChange={(event) =>
                            this.onInputChange(event.target.value)
                        }
                    />
                </div>
                <div className="row">    
                    <input
                        className="col"
                        placeholder="email address"
                        value={this.state.email}
                        onChange={(event) =>
                            this.onInputChange2(event.target.value)
                        }
                    />
                </div>
                <div className="row">
                    <input
                        className="col"
                        placeholder="password"
                        type="password"
                        value={this.state.password}
                        onChange={(event) =>
                            this.onInputChange3(event.target.value)
                        }
                    />
                </div>
                <div className="row">
                    <input className="form-check-input col ml-3" type="checkbox" value="1" id="defaultCheck1" />
                    <label className="form-check-label col">Consent to be contacted by Email.</label>
                    <button
                        className="btn-primary btn-lg text-white border-dark border-4 col"
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
       
        );
    }
}

export default Signup;

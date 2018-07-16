import React, { Component } from 'react';
import { render } from 'react-dom';
import * as userService from '../services/user';
import * as profileService from '../services/profile';

import AccountEdit from './accountEdit';

class AccountView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            profile: '' };
    }
    
    componentDidMount() {
        userService.checkUser()
        .then((id) => {
            console.log(id);
            this.setState({ id });
            profileService.one(id)
            .then((result) => {
                console.log(result);
                let profile = result;
                this.setState({ profile });
            })            
        }).catch((err) => {
            console.log(err);
        })

    }


    render() {
        console.log(this.state.profile);
        return (
            <div className="mt-5">
             <AccountEdit id={this.state.id}/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" colSpan="2">{this.state.profile.name}</th>
                            <th scope="col">{this.state.profile.covalence_relationship}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Email</th>
                            <td colSpan="2">{this.state.profile.email}</td>
                        </tr>
                        <tr>
                        <th scope="row">Website</th>
                            <td colSpan="2"><a href={this.state.profile.website} target="_blank">{this.state.profile.website}</a></td>
                        </tr>
                        <tr>
                            <th scope="row">Links</th>
                            <td><a href={this.state.profile.github} target="_blank">{this.state.profile.github}</a></td>
                            <td><a href={this.state.profile.linkedin} target="_blank">{this.state.profile.linkedin}</a></td>
                        </tr>
                        <tr>
                            <th scope="row">skills</th>
                            <td colSpan="2">{this.state.profile.skills}</td>
                        </tr>
                        <tr>
                            <th scope="row">Interested in learning</th>
                            <td colSpan="2">{this.state.profile.desired_skills}</td>
                        </tr>
                        <tr>
                            <th scope="row">About</th>
                            <td colSpan="2">{this.state.profile.bio}</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        
        )
    }
}

export default AccountView;
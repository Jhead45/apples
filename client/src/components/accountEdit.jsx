import React, { Component } from 'react';
import { render } from 'react-dom';
import * as profileService from '../services/profile';


class AccountEdit extends Component {

    constructor(props) {
        super(props);
        this.state = { profile: '',
                        placeHolders: '',
                        name: '',
                        covalence_relationship:'',
                        email: '',
                        github: '',
                        linkedin: '',
                        skills: '',
                        desired_skills: '',
                        bio: '',
                        website: '',
                        id: '' };
    }
        componentWillReceiveProps(newProps) {
            console.log(newProps);
            let id = newProps.id;
            this.setState({ id });


        }
        

            onInputChange(value) {
                this.setState({ name: value });
            }
        
            onInputChange2(value) {
                this.setState({ covalence_relationship: value });
            }
            onInputChange3(value) {
                this.setState({ email: value });
            }
        
            onInputChange4(value) {
                this.setState({ github: value });
            }
            onInputChange5(value) {
                this.setState({ linkedin: value });
            }
        
            onInputChange6(value) {
                this.setState({ skills: value });
            }
            onInputChange7(value) {
                this.setState({ desired_skills: value });
            }
        
            onInputChange8(value) {
                this.setState({ bio: value });
            } 
            onInputChange9(value) {
                this.setState({ website: value });
            }

            handleForm(name, covalence_relationship, email, github, linkedin, skills, desired_skills, bio, website) {
                event.preventDefault();
                    let data = {
                        name: this.state.name,
                        covalence_relationship: this.state.covalence_relationship,
                        email: this.state.email,
                        github: this.state.github,
                        linkedin: this.state.linkedin,
                        skills: this.state.skills,
                        desired_skills: this.state.desired_skills,
                        bio: this.state.bio,
                        website: this.state.website
                    }
                profileService.update(this.state.id, data)
                    .then((res) => {
                        location.reload();
                    })
                    .catch((error) => console.error('Error'));
        
                } 
            
            
        
        

    render() {
        return (
<div>
    <form
        className="d-flex justify-content-center mb-3 form-control-lg"
        onSubmit={(event) =>
                this.handleForm(
                    event,
                    this.state.name,
                    this.state.covalence_relationship,
                    this.state.email,
                    this.state.github,
                    this.state.linkedin,
                    this.state.skills,
                    this.state.desired_skills,
                    this.state.bio,
                    this.state.website

                )
    }>
        <div className="form-group divSize">
        <input
                className="d-block w-100 pl-2"
                placeholder="Name"
                value={this.state.name}
                onChange={(event) =>
                    this.onInputChange(event.target.value)
                }
        />
        <select 
                className="w-100"
                value={this.state.covalence_relationship}              
                onChange={(event) =>
                    this.onInputChange2(event.target.value)
        }>  
            <option selected value="">Your Relationship to Covalence</option>
            <option value="Student">Student</option>
            <option value="Alumni">Alumni</option>
            <option value="Instructor">Instructor</option>
        </select>
        <input
                className="d-block w-100 pl-2"
                placeholder="email"
                value={this.state.email}
                onChange={(event) =>
                    this.onInputChange3(event.target.value)
                }
        />
        <input
                className="d-block w-100 pl-2"
                placeholder="website"
                value={this.state.website}
                onChange={(event) =>
                    this.onInputChange9(event.target.value)
                }
        />
        <input
                className="d-block w-100 pl-2"
                placeholder="github url"
                value={this.state.github}
                onChange={(event) =>
                    this.onInputChange4(event.target.value)
                }
        />
        <input
                className="d-block w-100 pl-2"
                placeholder="linkedin url"
                value={this.state.linkedin}
                onChange={(event) =>
                    this.onInputChange5(event.target.value)
                }
        />
        <textarea
                rows="5"
                className="d-block w-100 pl-2"
                placeholder="skills"
                value={this.state.skills}
                onChange={(event) =>
                    this.onInputChange6(event.target.value)
                }
        />
        <textarea
                rows="3"
                className="d-block w-100 pl-2"
                placeholder="Skills you want to learn"
                value={this.state.desired_skills}
                onChange={(event) =>
                    this.onInputChange7(event.target.value)
                }
        />
        <textarea
                rows="6"
                className="d-block w-100 pl-2"
                placeholder="Write a bio."
                value={this.state.bio}
                onChange={(event) =>
                    this.onInputChange8(event.target.value)
                }
        />
            <button
                className="bg-dark mt-1 text-white"
                type="submit">
                Submit Profile
            </button>
        </div>
    </form>
</div>





        )
    }
}

export default AccountEdit;
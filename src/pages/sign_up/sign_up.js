import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './sign_up.scss';
import { faUser, faKey, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'

class SignUp extends Component {

    componentDidMount() {
        if(window.localStorage.getItem("auth")) {
            window.location.replace('/');
        }
    }

    sendSignUpRequest() {
        let url = `${process.env.REACT_APP_API}/api/v1/users/`
        console.log("test");
        if(this.Password.value === this.Confirmation.value) {
            axios.post(url, {
                username: this.Username.value,
                email: this.Email.value,
                password: this.Password.value
            }).then(response => {
                if(response.status == 200) {
                    window.localStorage.setItem('auth', this.Username.value);
                    window.localStorage.setItem('seller', false);
                    window.location.replace('/');
                }
            });
        }
    }

    toLogin() {
        window.location.replace("/login");
    }

    render() {
        return (
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <img src={logo} className="brand_logo" alt="Logo"/>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form>
                            <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faMailBulk} /></span>
                                    </div>
                                    <input type="text" name="username" ref={(input) => {this.Email = input }} className="form-control input_user" placeholder="email"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                    </div>
                                    <input type="text" name="username" ref={(input) => {this.Username = input }} className="form-control input_user" placeholder="username"/>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                                    </div>
                                    <input type="password" name="password" ref={(input) => {this.Password = input }} className="form-control input_pass" placeholder="password"/>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                                    </div>
                                    <input type="password" name="confirmation" ref={(input) => {this.Confirmation = input }} className="form-control input_pass" placeholder="confirm password"/>
                                </div>
                            </form>
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button className="btn login_btn" onClick={this.sendSignUpRequest.bind(this)}>Sign Up!</button>
                        </div>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="button" name="button" className="btn login_btn">Recover</button>
                            <button type="button" name="button" onClick={this.toLogin.bind(this)} className="btn login_btn">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;

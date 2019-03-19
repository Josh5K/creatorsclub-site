import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './sign_in.scss';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'

class SignIn extends Component {

    componentDidMount() {
        if(window.localStorage.getItem("auth")) {
            window.location.replace('/');
        }
    }

    sendLoginRequest() {
        let url = `${process.env.REACT_APP_API}/api/v1/users/signin`
        axios.post(url, {
            email: this.Username.value,
            password: this.Password.value
        }).then(response => {
            if(response.status == 200) {
                window.localStorage.setItem('auth', this.Username.value);
                window.localStorage.setItem('seller', response.data.seller);
                window.location.replace('/');
            }
        });
    }

    toSignUp() {
        window.location.replace('/signup');
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
                            </form>
                        </div>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button className="btn login_btn" onClick={this.sendLoginRequest.bind(this)}>Login</button>
                        </div>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="button" name="button" className="btn login_btn">Recover</button>
                            <button type="button" name="button" onClick={this.toSignUp.bind(this)} className="btn login_btn">Sign-Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LogIn.css';
import LogInImage from './LogInImage.png';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import Context from '../../store/context.js';

class LogIn extends Component {

    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            computedMessage: '',
            token: '',
            showNotificationBox: false,
            loginStatus: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    };

    handleLoginRequest() {

        const {state, actions} = this.context;

        const options = {
            headers: {
                'username': this.state.username,
                'password': this.state.password
            }
        };

        var self = this;
          
        axios
            .get(`${state.path}/app-api/login`, options)
            .then(response => {
                self.setState({
                    computedMessage: 'You loged in successfully!',
                    showNotificationBox: true,
                    loginStatus: true,
                    token: response.headers.authorization
                });            
            })
            .catch(error => {
                this.setState({
                    computedMessage: "User doesn't exists!",
                    showNotificationBox: true,
                });
            });
    };
    
        
    render() {

        let notificationBox;

        if (this.state.showNotificationBox) {
            notificationBox = (
                <div className="registerNotificationBox">
                    <div>
                        <FaExclamationCircle />
                        <p> {this.state.computedMessage} </p>
                        {/* <a href='/user-personal-cabinet' token={this.state.token}> Go to profile. </a> */}
                        {/* <FaTimes /> */}
                    </div>
                </div>
            );
        }

        const {state, actions} = this.context;

        if (this.state.loginStatus) {
            actions({type: 'setState', payload: {...state, authorizationToken: this.state.token}});
            return <Redirect to='/user-personal-cabinet' />
        }

        return (
            <div> 
                <div className="wrapper">
                        <div className="navigation-bar">
                            <a 
                                href="/" 
                                className="title links">Incidents Reporting Platform</a>
                            <a 
                                href="/all-incidents"
                                className="links">INCIDENTS</a>
                            <a 
                                href="/public-institutions"
                                className="links">PUBLIC INSTITUTIONS</a>
                            <a 
                                href="/about-us"
                                className="links">ABOUT US</a>
                            <div className='buttonWrapper'>
                                <button className="button">
                                    <a
                                        href="/"
                                        className="button"
                                    > Register </a>
                                </button>
                            </div>
                            
                        </div>
                    </div>

                        {/* test */}
                    {/* <h1>Token: {state.authorizationToken} </h1> */}

                    <div className="logInWrapper"> 
                        <img src={LogInImage} className="logInImage" />
                        <div className="registerBox logInBox">
                            <p className="welcome" > Login </p> 
                            <div className="inputLabelWrapper">
                                <p className="registerLabel"> Username </p>
                            </div>
                            <div className="registerInputPieceWrapper" >
                                <input 
                                    type="text" 
                                    name="username"
                                    value={this.state.username} 
                                    onChange={this.handleInputChange}
                                    className="registerInput" />
                            </div>
                            <div className="inputLabelWrapper">
                                <p className="registerLabel"> Password </p>
                            </div>
                            <div className="registerInputPieceWrapper" >
                                <input 
                                    type="password" 
                                    name="password"
                                    value={this.state.password} 
                                    onChange={this.handleInputChange}
                                    className="registerInput" />
                            </div>
                            <div className="termsAndConditions logInRemember">
                                <div className="allRemember">
                                    <input type="checkbox" /> 
                                    <p className="accept"> Remember me </p>
                                </div>
                                <a href="https://dexonline.ro/" className="forgotPassword" > Forgot password? </a>
                            </div>
                            <button 
                                className="registerButton" 
                                onClick={this.handleLoginRequest}> 
                                    Sign in 
                            </button>
                            <div className="logInQuestion" >
                                <p className="noAccount" > Don't have an account? </p>
                                <a href="/" className="signUp" > Sign up </a>
                            </div>
                        </div>
                        {notificationBox}
                    </div>
            </div>
        );
    }
};

export default withRouter(LogIn);
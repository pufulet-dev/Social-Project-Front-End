import React, { Component, useContext } from 'react';
import Context from '../../store/context.js';

import './Home.css';
import { withRouter } from 'react-router-dom';
import bottomImage from './bottomPhoto.png';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { FaExclamationCircle } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
// import {FaTwitter} from "react-icons/fa"


class Home extends Component {

    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            text: "Our mission is to ensure and improve the communication capacity between citizens and public-administrative bodies with increasing the degree of involvement of civilization persons in reporting public events incidents for the correction and monitoring of the rights and obligations of individuals and legal entities.",
            username: "",
            email: "",
            idnp: "",
            password: "",
            confirmPassword: "",
            computedMessage: "",
            checkBox: false,
            usernameValidation: false,
            emailValidation: false,
            idnpValidation: false,
            passwordValidation: false,
            confirmPasswordValidation: false,
            loginRedirectMessage: '',
            registStatus: false,
            showNotificationBox: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRegistRequest = this.handleRegistRequest.bind(this);
    };

    handleInputChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if (name === "checkBox") value = target.checked;
    
        this.setState({
          [name]: value
        });
        if (name === "username") {
            const regex0 = new RegExp('[a-zA-Z0-9]+');
            this.setState({
                usernameValidation: regex0.test(value)
            });
        } else if (name === "email") {
            const regex1 = new RegExp('[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}');
            this.setState({
                emailValidation: regex1.test(value)
            });
        } else if (name === "idnp") {
            const regex2 = new RegExp('\\d{13,14}');
            this.setState({
                idnpValidation: regex2.test(value)
            });
        } else if (name === "password") {
            const regex3 = new RegExp('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
            this.setState({
                passwordValidation: regex3.test(value)
            });
        } else if (name == "confirmPassword") {
            this.setState({
                confirmPasswordValidation: (value === this.state.password && this.state.passwordValidation),
            })
        }
        
    };

    handleRegistRequest() {

        const {state, actions} = this.context;
        actions({type: 'setState', payload: {...state, value: 'totok'}})

        let aux = this.state;

        if (!aux.usernameValidation || !aux.passwordValidation || !aux.emailValidation || !aux.idnpValidation || !aux.confirmPasswordValidation) {
            this.setState({
                computedMessage: "Fields are completed incorrectly.",
                showNotificationBox: true
            });
            return;
        }

        if (!this.state.checkBox) {
            this.setState({
                computedMessage: "You must accept terms and conditions.",
                showNotificationBox: true
            });
            return;
        }

        axios({
            method: 'post',
            url: `${state.path}/app-api/common/regist`,
            data: {
                email: this.state.email,
                idnp: this.state.idnp, 
                password: this.state.password,
                username: this.state.username
            }
        })
            .then(data => {
                console.log(data);
                this.setState({
                    registStatus: true,
                    computedMessage: "Your account has been created.",
                    showNotificationBox: true,
                    loginRedirectMessage: 'Click to log in.',
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    // registStatus: true,  //CHANGE AFTER
                    computedMessage: "Something went wrong.",
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
                        {/* <FaTimes onClick="" /> */}
                    </div>
                    <a href='/login'> {this.state.loginRedirectMessage} </a>
                </div>
            );
        }

        let usernameReq = "";

        if (document.getElementById('usernameId') === document.activeElement) {
            usernameReq = (
                <p className="inputStatus red"> Must contain latin letters, digits and symbols. </p>
            );
            if (this.state.usernameValidation) {
                usernameReq = (
                    <p className="inputStatus green"> Good. </p>
                );
            }
        }

        let emailReq = "";

        if (document.getElementById('emailId') === document.activeElement) {
            emailReq = (
                <p className="inputStatus red"> Invalid Email. </p>
            );
            if (this.state.emailValidation) {
                emailReq = (
                    <p className="inputStatus green"> Good. </p>
                );
            }
        }

        let idnpReq = "";

        if (document.getElementById('idnpId') === document.activeElement) {
            idnpReq = (
                <p className="inputStatus red"> Must contain 13 digits. </p>
            );
            if (this.state.idnpValidation) {
                idnpReq = (
                    <p className="inputStatus green"> Good. </p>
                ) 
            } 
        }

        let passwordReq = "";
        
        if (document.getElementById('passwordId') === document.activeElement) {
            passwordReq = (
                <p className="inputStatus red"> At leats one A-Z, one a-z, one digit, one symbol (min. 8 char.)  </p>
            );
            if (this.state.passwordValidation) {
                passwordReq = (
                    <p className="inputStatus green"> Good. </p>
                ) 
            } 
        }

        let confirmPasswordReq = "";

        if (document.getElementById('confirmPasswordId') === document.activeElement) {
            confirmPasswordReq = (
                <p className="inputStatus red"> Must be the same correct password. </p>
            ) ;
            if (this.state.confirmPasswordValidation) {
                confirmPasswordReq = (
                    <p className="inputStatus green"> Good. </p>
                ) 
            } 
        }

        // if (this.state.registStatus) {
        //     return <Redirect to='/login' />
        // };

        // IMPLEMENT X BUTTON
        // SOLVE BUG: WINDOW SHOWS ONLY ONCE

        const {state} = this.context;

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
                                    href="/login"
                                    className="button"
                                > Log In </a>
                            </button>
                        </div>
                    </div> 
                </div>

                {/* HERO SECTION */}
                <div className="allPage">
                    <div className="heroWrapper">
                        <h1 className="header header1">Notice,</h1>
                        <h1 className="header">Report, Collaborate </h1>
                        <p className="body"> {this.state.text} </p>
                    </div>
                    <div className="registerBox">
                        <p className="welcome">Welcome</p>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel">User Name</p>
                        </div>
                        {usernameReq}
                        <div className="registerInputPieceWrapper" >
                            <input 
                                required
                                type="text" 
                                name="username"
                                id="usernameId" 
                                value={this.state.username} 
                                onChange={this.handleInputChange}
                                className="registerInput" />  
                        </div>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel">Your Email</p>
                        </div>
                        {emailReq}
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="text"     
                                name="email"
                                id="emailId" 
                                value={this.state.email} 
                                onChange={this.handleInputChange}
                                className="registerInput" />
                        </div>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel">IDNP</p>
                        </div>
                        {idnpReq}
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="text" 
                                name="idnp"
                                id="idnpId" 
                                value={this.state.idnp}
                                onChange={this.handleInputChange} 
                                className="registerInput" />
                        </div>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel">Password</p>
                        </div>
                        {passwordReq}
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="password" 
                                name="password"
                                id="passwordId" 
                                value={this.state.password}
                                onChange={this.handleInputChange} 
                                className="registerInput" />
                        </div>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel"> Confirm Password</p>
                        </div>
                        {confirmPasswordReq}
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                id="confirmPasswordId"
                                checked={this.state.confirmPassword}
                                onChange={this.handleInputChange} 
                                className="registerInput" />
                        </div>
                        {/* ENDED THE LIST OF INPUTS */}
                        <div className="termsAndConditions">
                            <input 
                                type="checkbox"
                                name="checkBox"
                                value={this.state.checkBox}
                                onChange={this.handleInputChange} />
                            <p className="accept">I Accept</p>
                            <a 
                                href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" 
                                className="termsLink">Terms and Conditions</a>
                        </div>
                        <button className="registerButton" onClick={this.handleRegistRequest}>Register</button>
                    </div>
                    {notificationBox}

                    <img className="bottomImage" src={bottomImage} />
                </div>
            </div>
        );
    };
};

export default withRouter(Home);
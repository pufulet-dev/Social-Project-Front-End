import React, {Component} from 'react';
import './Home.css';
import { withRouter } from 'react-router-dom';
import bottomImage from './bottomPhoto.png';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { FaExclamationCircle } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
// import {FaTwitter} from "react-icons/fa"


class Home extends Component {

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
            // console.log("uuuuu");
            let s = value, okLatin = 1, okNum = 1, okBigLet = 1, okSmallLet = 1;
            for (let i=0; i<s.length; i++) {
                if (s[i] >= '0' && s[i] <= '9') okNum = 1;
                else if (s[i] >= 'a' && s[i] <= 'z') okSmallLet = 1;
                else if (s[i] >= 'A' && s[i] <= 'Z') okBigLet = 1;
                else if (s[i] == '-' || s[i] == '_') {}
                else okLatin = 0;
            }
            if (s.length >= 6 && okLatin && okNum && okBigLet && okSmallLet) {
                this.setState({
                    usernameValidation: true
                })
            } else {
                this.setState({
                    usernameValidation: false
                })
            }
        } else if (name === "email") {
            let okA = 0, okP = 0, ok = 0, s = value;
            for (let i=0; i<s.length; i++) {
                if (s[i] === '@') okA = 1;
                else if(s[i] === '.') okP = 1;
            }
            if (okA && okP) ok = 1;
            this.setState({
                emailValidation: ok,
            })
        } else if (name === "idnp") {
            let ok = 1, s = value;
            for (let i=0; i<s.length; i++) {
                if (s[i] >= '0' && s[i] <= '9') {}
                else if (s[i] >= 'a' && s[i] <= 'z') {}
                else if (s[i] >= 'A' && s[i] <= 'Z') {}
                else ok = 0;
            }
            if (s.length < 8) ok = 0;
            this.setState({
                idnpValidation: ok,
            })
        } else if (name === "password") {
            let s = value, okSmall = 0, okBig = 0, okNum = 0, okDiff = 0, ok = 0;
            for (let i=0; i<s.length; i++) {
                if (s[i] >= '0' && s[i] <= '9') okNum = 1;
                else if (s[i] >= 'a' && s[i] <= 'z') okSmall = 1;
                else if (s[i] >= 'A' && s[i] <= 'Z') okBig = 1;
                else okDiff = 1;
            }
            if (s.length >= 8 && okNum && okSmall && okBig && !okDiff) ok = 1;
            this.setState({
                passwordValidation: ok,
            })
        } else if (name == "confirmPassword") {
            let s = value, ok = 1;
            if (s != this.state.password) ok = 0;
            if (!this.state.passwordValidation) ok = 0;
            this.setState({
                confirmPasswordValidation: ok,
            })
        }
        
    };

    handleRegistRequest() {

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
            url: 'http://localhost:8080/app-api/common/regist',
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
                    // loginRedirectMessage: 'Click to log in.'
                });
            });
            
        // http://localhost:8080/app-api/common/regist
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

        let usernameReq;

        if (!this.state.usernameValidation) {
            usernameReq = (
                <p className="inputStatus red"> Latin letters, digits, underscore or dash characters (min. 6). </p>
            );
        } else {
            usernameReq = (
                <p className="inputStatus green"> Good. </p>
            );
        }

        let emailReq;

        if (this.state.emailValidation) {
            emailReq = (
                <p className="inputStatus green"> Good. </p>
            );
        } else {
            emailReq = (
                <p className="inputStatus red"> Invalid Email. </p>
            );
        }

        let idnpReq;

        if (this.state.idnpValidation) {
            idnpReq = (
                <p className="inputStatus green"> Good. </p>
            ) 
        } else {
            idnpReq = (
                <p className="inputStatus red"> Only Latin letters and digits (min. 8). </p>
            );
        }

        let passwordReq;

        if (this.state.passwordValidation) {
            passwordReq = (
                <p className="inputStatus green"> Good. </p>
            ) 
        } else {
            passwordReq = (
                <p className="inputStatus red"> 1 lowercase and 1 uppercase latin letter, 1 digit (min. 8). </p>
            )
        }

        let confirmPasswordReq;

        if (this.state.confirmPasswordValidation) {
            confirmPasswordReq = (
                <p className="inputStatus green"> Good. </p>
            ) 
        } else {
            confirmPasswordReq = (
                <p className="inputStatus red"> Incorrect password. </p>
            ) 
        }

        // if (this.state.registStatus) {
        //     return <Redirect to='/login' />
        // };

        // IMPLEMENT X BUTTON
        // SOLVE BUG: WINDOW SHOWS ONLY ONCE

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
                        {/* ! maybe add placeholders */}
                        <div className="inputLabelWrapper">
                            <p className="registerLabel">User Name</p>
                            {usernameReq}
                        </div>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                required
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleInputChange}
                                className="registerInput" />  
                        </div>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel">Your Email</p>
                            {emailReq}
                        </div>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="text"     
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleInputChange}
                                className="registerInput" />
                        </div>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel">IDNP</p>
                            {idnpReq}
                        </div>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="text" 
                                name="idnp" 
                                value={this.state.idnp}
                                onChange={this.handleInputChange} 
                                className="registerInput" />
                        </div>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel">Password</p>
                            {passwordReq}
                        </div>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="password" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleInputChange} 
                                className="registerInput" />
                        </div>
                        <div className="inputLabelWrapper">
                            <p className="registerLabel"> Confirm Password</p>
                            {confirmPasswordReq}
                        </div>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="password" 
                                name="confirmPassword" 
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
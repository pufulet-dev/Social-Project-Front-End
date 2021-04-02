import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LogIn.css';
import LogInImage from './LogInImage.png';

class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginStatus: "nothing",
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

    async handleLoginRequest() {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'content-type': 'application/json',
                'username': this.state.username,
                'password': this.state.password
            }
        };
        const response = await fetch("http://localhost:8080/app-api/login");
        const data = await response.json();
        this.setState({loginStatus: data});
        console.log(data);
        console.log('aici');
        // console.log(this.state.username);
    };

    // http://localhost:8080/app-api/login?username=${this.state.username}&password=${this.state.password}


    render() {
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
                    <div className="logInWrapper"> 
                        <img src={LogInImage} className="logInImage" />
                        <div className="registerBox logInBox">
                            <p className="welcome" > Login </p> 
                            <p className="registerLabel"> Username </p>
                            <div className="registerInputPieceWrapper" >
                                <input 
                                    type="text" 
                                    name="username"
                                    value={this.state.username} 
                                    onChange={this.handleInputChange}
                                    className="registerInput" />
                            </div>
                            <p>
                                {/* {this.state.loginStatus} */}
                            </p>
                            <p className="registerLabel">Password</p>
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
                    </div>
            </div>
        );
    }
};

export default withRouter(LogIn);
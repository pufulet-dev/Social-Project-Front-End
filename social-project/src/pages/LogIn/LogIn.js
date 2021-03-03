import React from 'react';
import { withRouter } from 'react-router-dom';
import './LogIn.css';
import LogInImage from './LogInImage.png';

const LogIn = (props) => {

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
                        <div className="registerInputPieceWrapper" >
                            <p className="registerLabel"> Username </p>
                            <input type="text" className="registerInput" />
                            {/* placeholder="Email" */}
                        </div>
                        <div className="registerInputPieceWrapper" >
                            <p className="registerLabel">Password</p>
                            <input type="password" className="registerInput" />
                            {/* placeholder="Identification Number" */}
                        </div>
                        <div className="termsAndConditions logInRemember">
                            <div className="allRemember">
                                <input type="checkbox" /> 
                                <p className="accept"> Remember me </p>
                            </div>
                            <a href="https://dexonline.ro/" className="forgotPassword" > Forgot password? </a>
                        </div>
                        <button className="registerButton"> Sign in </button>
                        <div className="logInQuestion" >
                            <p className="noAccount" > Don't have an account? </p>
                            <a href="/" className="signUp" > Sign up </a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default withRouter(LogIn);
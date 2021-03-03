import React from 'react';
import './Hero.css';
import logo from './bottomPhoto.png';

const Hero = (props) => {

    const text = "Our mission is to ensure and improve the communication capacity between citizens and public-administrative bodies with increasing the degree of involvement of civilization persons in reporting public events incidents for the correction and monitoring of the rights and obligations of individuals and legal entities.";

    

    return (
        <div className="allPage">
            <div className="heroWrapper">
                <h1 className="header header1">Notice,</h1>
                <h1 className="header">Report, Collaborate </h1>
                <p className="body"> {text} </p>
            </div>
            <div className="registerBox">
                <p className="welcome">Welcome</p>
                <div className="registerInputPieceWrapper" >
                    <p className="registerLabel">User Name</p>
                    <input type="text" className="registerInput" />  
                    {/* placeholder="User Name" */}
                </div>
                <div className="registerInputPieceWrapper" >
                    <p className="registerLabel">Your Email</p>
                    <input type="text" className="registerInput" />
                    {/* placeholder="Email" */}
                </div>
                <div className="registerInputPieceWrapper" >
                    <p className="registerLabel">IDNP</p>
                    <input type="text" className="registerInput" />
                    {/* placeholder="IDNP" */}
                </div>
                <div className="registerInputPieceWrapper" >
                    <p className="registerLabel">Password</p>
                    <input type="password" className="registerInput" />
                    {/* placeholder="Identification Number" */}
                </div>
                <div className="registerInputPieceWrapper" >
                    <p className="registerLabel">Confirm Password</p>
                    <input type="password" className="registerInput" />
                    {/* placeholder="Password" */}
                </div>
                <div className="termsAndConditions">
                    <input type="checkbox" />
                    <p className="accept">I Accept</p>
                    <a 
                        href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" 
                        className="termsLink">Terms and Conditions</a>
                </div>
                <button className="registerButton">Register</button>
            </div>
            <img className="bottomImage" src={logo} />
        </div>
    );
};

export default Hero;
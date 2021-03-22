import React, {Component} from 'react';
import './Home.css';
import { withRouter } from 'react-router-dom';
import bottomImage from './bottomPhoto.png';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Our mission is to ensure and improve the communication capacity between citizens and public-administrative bodies with increasing the degree of involvement of civilization persons in reporting public events incidents for the correction and monitoring of the rights and obligations of individuals and legal entities.",
            username: "",
            email: "",
            idnp: "",
            password: "",
            registStatus: "not Registered",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRegistRequest = this.handleRegistRequest.bind(this);
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    };

    async handleRegistRequest() {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'mode': 'opaque'
                // 'mode': 'no-cors'
            },
            body: JSON.stringify({ 
                idnp: this.state.idnp, 
                email: this.state.email,
                username: this.state.username,
                password: this.state.password })
        };
        const response = await fetch('http://localhost:8080/app-api/common/regist', requestOptions);
        const data = await response.json();
        this.setState({registStatus: data.token});
        console.log(data);
        // http://localhost:8080/app-api/common/regist
    };
    
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
                        <p className="registerLabel">User Name</p>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleInputChange}
                                className="registerInput" />  
                        </div>
                        <p className="registerLabel">Your Email</p>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="text"     
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleInputChange}
                                className="registerInput" />
                        </div>
                        <p className="registerLabel">IDNP</p>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="text" 
                                name="idnp" 
                                value={this.state.idnp}
                                onChange={this.handleInputChange} 
                                className="registerInput" />
                            {/* <p>{this.state.registStatus}</p> */}
                        </div>
                        <p className="registerLabel">Password</p>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="password" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleInputChange} 
                                className="registerInput" />
                        </div>
                        <p className="registerLabel">Confirm Password</p>
                        <div className="registerInputPieceWrapper" >
                            <input 
                                type="password" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleInputChange} 
                                className="registerInput" />
                        </div>
                        {/* ENDED THE LIST OF INPUTS */}
                        <div className="termsAndConditions">
                            <input type="checkbox" />
                            <p className="accept">I Accept</p>
                            <a 
                                href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" 
                                className="termsLink">Terms and Conditions</a>
                        </div>
                        <button className="registerButton" onClick={this.handleRegistRequest}>Register</button>
                    </div>
                    <img className="bottomImage" src={bottomImage} />
                </div>
            </div>
        );
    };
};

export default withRouter(Home);
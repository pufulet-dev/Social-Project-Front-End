import React, { Component } from 'react';
import { render } from 'react-dom';
import './NavigationBar.css';
import { BrowserRouter as Router, Link,useHistory } from "react-router-dom";
// import { connect } from 'react-redux';
// import { withRouter } from "react-router-dom";
// import SearchIncident from '../../pages/SearchIncident/SearchIncident.js';

class NavBar extends Component {
    render() {
        
        // const history = useHistory();

        // function handleClick(path) {
        //     history.push(path);
        // };

        let path = "/all-incidents";
        let name = "LogIn";

        function handleToggle() {
            if (this.path === "all-incidents") {
                this.path = "/";
                this.name="Register";
            } else {
                this.path = "/all-incidents";
                this.name = "LogIn";
            }
        };

        return (
            <Router>
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
                                    className="toggleButton"
                                > LogIn </a>
                            </button>
                        </div>
                        
                    </div>
                </div>   
            </Router>
            
        )
    }
};

export default NavBar;
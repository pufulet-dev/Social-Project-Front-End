import React from 'react';
import './Home.css';
// import NavBar from '../../components/NavigationBar/NavigationBar.js';
import HeroSection from '../../components/HeroSection/Hero.js';
import { withRouter } from 'react-router-dom';

// import { Route } from "react-router-dom";

const Home = (props) => {

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
            <HeroSection className="hero-section" />
        </div>
    );
};

export default withRouter(Home);
import React from 'react';
import './NavigationBar.css';
import { Route } from 'react-router-dom';


const NavBar = (props) => {

    return (
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
                <div className="buttonWrapper">
                    <button className="button">Log In</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
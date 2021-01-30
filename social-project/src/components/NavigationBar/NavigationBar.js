import React from 'react';
import './NavigationBar.css';

const NavBar = (props) => {

    return (
        <div className="wrapper">
            <div className="navigation-bar">
                <p className="title">Incidents Reporting Platform</p>
                <p>INCIDENTS</p>
                <p>PUBLIC INSTITUTIONS</p>
                <p>ABOUT US</p>
                <div className="buttons">
                    <button className="button">Log In</button>
                    {/* <button className="button">Register</button> */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
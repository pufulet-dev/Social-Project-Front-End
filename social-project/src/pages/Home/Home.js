import React from 'react';
import './Home.css';
import NavBar from '../../components/NavigationBar/NavigationBar.js';
import HeroSection from '../../components/HeroSection/Hero.js';
// import { Route } from "react-router-dom";

const Home = (props) => {

    return (
        <div>
            <NavBar />
            <HeroSection />
        </div>
    );
};

export default Home;
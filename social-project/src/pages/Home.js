import React from 'react';
import './Home.css';
// import HeroSection from '../Hero.js';
import NavBar from '../components/NavigationBar/NavigationBar.js';
import HeroSection from '../components/HeroSection/Hero.js';

const Home = (props) => {

    return (
        <div>
            <NavBar />
            <HeroSection />
        </div>
    );
};

export default Home;
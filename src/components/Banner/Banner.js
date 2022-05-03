import React from "react";
import logo from '../../assets/logo.png';
import './Banner.css';

const Banner = () => {
    return (
        <header className='banner'>
            <img src={ logo } alt='La maison jungle' className='banner-logo' />
            <h1 className='banner-title'>La maison jungle</h1>
        </header>
    );
}

export default Banner;
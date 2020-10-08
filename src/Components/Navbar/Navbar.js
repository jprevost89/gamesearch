import React from 'react';
import './Navbar.css';
import logo from '../../Pictures/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>SEARCH</li>
                <li>GAMES</li>
                <li>RECOMMENDATIONS</li>
                <li>ABOUT</li>
                <img src={logo} alt="logo"/>
            </ul>
        </div>
    )
}

export default Navbar;
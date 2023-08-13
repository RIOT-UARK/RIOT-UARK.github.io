import React from 'react';
import DarkModeToggle from './darkMode';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Microbots">Microbots</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/MeetTheTeam">Meet the Team</Link>
            <Link to="/Donate">Donate</Link>
            <Link to="/GettingStarted">Getting Started</Link>
            <DarkModeToggle />
        </nav>
    );
};
export default NavBar;

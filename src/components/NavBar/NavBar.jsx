import React from 'react';
import DarkModeToggle from '../darkMode/darkMode';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/riot-website-/">Home</Link>
            <Link to="/riot-website-/Microbots">Microbots</Link>
            <Link to="/riot-website-/Projects">Projects</Link>
            <Link to="/riot-website-/MeetTheTeam">Meet the Team</Link>
            <Link to="/riot-website-/Donate">Donate</Link>
            <Link to="/riot-website-/GettingStarted">Getting Started</Link>
            <DarkModeToggle />
        </nav>
    );
};
export default NavBar;

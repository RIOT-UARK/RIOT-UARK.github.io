import React from 'react';
import DarkModeToggle from '../darkMode/darkMode';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
            </NavLink>
            <NavLink to="/Microbots" className={({ isActive }) => (isActive ? 'active' : '')}>
                Microbots
            </NavLink>
            <NavLink to="/Projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                Projects
            </NavLink>
            <NavLink to="/MeetTheTeam" className={({ isActive }) => (isActive ? 'active' : '')}>
                Meet the Team
            </NavLink>
            {/* <NavLink to="/Donate" className={({ isActive }) => (isActive ? 'active' : '')}>
                Donate
            </NavLink>
            <NavLink to="/Shop" className={({ isActive }) => (isActive ? 'active' : '')}>
                Shop
            </NavLink> */}
            <DarkModeToggle />
        </nav>
    );
};
export default NavBar;

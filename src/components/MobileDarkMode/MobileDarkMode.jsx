import './MobileDarkMode.css';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const MobileDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme && currentTheme === 'dark') {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className="MobileDarkModeButton" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
        </div>
    );
};

export default MobileDarkMode;

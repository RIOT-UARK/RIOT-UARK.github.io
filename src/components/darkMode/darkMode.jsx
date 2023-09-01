import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
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
        <div id="darkMode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
    );
};

export default DarkModeToggle;

import React, { useState, useEffect } from 'react';
import { HiMoon } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';

import './lightmode-switcher.css';
import Cookies from 'js-cookie';

function LightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const cookieColor = Cookies.get('color-preference');
    if (cookieColor) {
      setIsDarkMode(cookieColor === 'dark');
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleMode = () => {
    const newColorPreference = isDarkMode ? 'light' : 'dark';
    const icon = document.getElementById('dark-light-icon');
    icon.classList.add('switcher-light-dark');
    Cookies.set('color-preference', newColorPreference, { expires: 365 });
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <a id="dark-light-icon" className="switcher-light-dark mobile__switches glowing-icon" onClick={toggleMode}>
      {isDarkMode ? <HiMoon className='icon-size '/> : <BsFillSunFill className='icon-size'/>}
    </a>
  );
}

export default LightMode;

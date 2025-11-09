import React, { useEffect, useState } from 'react'
import { FaCog } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { themes } from '../../Data';
import ThemeItem from './ThemeItem';
import './Theme.css';


const getStorageColor = () => {
  let color = '19';
  if (localStorage.getItem('color')) {
    color = localStorage.getItem('color');
  }

  return color;
}

const getStorageTheme = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }

  return theme;
}

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    }
    else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--hue', color);
    localStorage.setItem('color', color);
  }, [color])

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <div className={`${showSwitcher ? 'show-switcher' : ''} style-switcher`}>
      <div className="switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
        <FaCog />
      </div>

      <div className="theme-toggler" onClick={toggleTheme}>
        {theme === 'light-theme' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </div>

      <h3 className="switcher-title">Switch Theme</h3>

      <div className="switcher-items grid">
        {themes.map((themes, index) => {
          return <ThemeItem key={index} {...themes} changeColor={changeColor} />;
        })}
      </div>

      <div className="switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>
        &times;
      </div>
    </div>
  )
};

export default Themes

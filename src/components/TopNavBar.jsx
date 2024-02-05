import React, { useState } from 'react';
import '../components/css_files/TopNavBar.css';

const TopNavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className='header'>
      <div className='navbar'>
        <div className='logo'><a href='#'>YOYO</a></div>
        <ul className='links'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Skills</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Experience</a></li>
        </ul>
        <a href="#" className="action-btn">Contact Me</a>
        <div className='toggle-btn' onClick={toggleNav}>
          <i className={`fas ${isNavVisible ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </div>
      <div className={`dropdown_menu ${isNavVisible ? 'open' : ''}`}>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href="#" className="action-btn">Contact Me</a></li>
      </div>
    </div>
  );
}

export default TopNavBar;

import React from 'react';
import '../components/css_files/TopNavBar.css';
import ThemeSwitch from './util-small-components/ThemeSwitch';

const TopNavBar = () => {
  return (
    <div className='header'>
      <div class="logo">
        <p>YOYO</p>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Experience</a></li>
        </ul>
      </nav>
      <div className='right-elements'>
        <ThemeSwitch />
        <a className="btn" href="#"><button>Contact</button></a>
      </div>
    </div>
  );
}

export default TopNavBar;

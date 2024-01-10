import React from 'react';
import './css_files/TopNavBar.css'; // Import the separate CSS file

const TopNavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Logo</a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="#">Theme Toggle Swith</a>
                        <a className="nav-item nav-link" href="#">Chatbox or menu option</a>
                    </div>
                </div>
            </nav>
        </>
    );  
};

export default TopNavBar;

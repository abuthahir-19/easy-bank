import React from "react";
import './Navbar.css';

function ResNav ({ isClicked }) {
    const displayContent = `res-nav-container ${!isClicked ? 'show' : 'hide'}`

    return (
        <div className={displayContent}>
            <nav className="nav-link">
                    <div className="link">
                        <a href="#">Home</a>
                    </div>
                    <div className="link">
                        <a href="#">About</a>
                    </div>
                    <div className="link">
                        <a href="#">Contact</a>
                    </div>
                    <div className="link">
                        <a href="#">Blog</a>
                    </div>
                    <div className="link">
                        <a href="#">Careers</a>
                    </div>
                </nav>
        </div>
    );
}

export default ResNav;
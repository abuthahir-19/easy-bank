import {Fragment, React, useState} from 'react'
import logo from '../../images/logo.svg';
import Button from '../Button/Button';
import closeIcon from '../../images/icon-close.svg';
import Hamburg from '../../images/icon-hamburger.svg';
import ResNav from './ResNav';

import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState (true);
    const li = 'www.google.com';
    const handleClick = () => {
        setClick (!click);
    }

    return (
        <Fragment>
            <div className="navigation-container">
                <header className='header'>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <nav className="nav-links">
                        <div className="link">
                            <a href={li}>Home</a>
                        </div>
                        <div className="link">
                            <a href={li}>About</a>
                        </div>
                        <div className="link">
                            <a href={li}>Contact</a>
                        </div>
                        <div className="link">
                            <a href={li}>Blog</a>
                        </div>
                        <div className="link">
                            <a href={li}>Careers</a>
                        </div>
                    </nav>
                    <div className="btn-container">
                        <Button text={"Request Invite"} placeholder={"navbar"} />
                    </div>
                    <div className={click ? "menu-icon show" : "menu-icon hide"}>
                        <button onClick={handleClick} className={click ? 'menu-btn show' : 'menu-btn hide'}>
                            <img src={click ? Hamburg : closeIcon} alt="" />
                        </button>
                    </div>
                </header>
            </div>
            <ResNav isClicked={click} />
        </Fragment>
    );
}

export default Navbar;
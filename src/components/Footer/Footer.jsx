import React from 'react';
import '../../App.css';
import appLogo from '../../images/footer-logo.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import insta from '../../images/icon-instagram.svg';
import yt from '../../images/icon-youtube.svg';
import pintrst from '../../images/icon-pinterest.svg';
import Button from '../Button/Button';

const Footer = () => {
    return (
        <div className="footer-section">
            <footer className='footer'>
                <div className="logo-social-section">
                    <div className="log">
                        <img src={appLogo} alt="Logo" />
                    </div>
                    <div className="social-links">
                        <a href="www.facebook.com">
                            <img src={facebook} alt="fb" />
                        </a>
                        <a href="www.youtube.com">
                            <img src={yt} alt="yt" />
                        </a>
                        <a href="www.twitter.com">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="www.pintrest.com">
                            <img src={pintrst} alt="pt" />
                        </a>
                        <a href="www.instagram.com">
                            <img src={insta} alt="insta" />
                        </a>
                    </div>
                </div>
                <div className="links part1">
                    <div className="links">
                        <a href="#">About</a>
                    </div>
                    <div className="links">
                        <a href="#">Contact</a>
                    </div>
                    <div className="links">
                        <a href="#">Blog</a>
                    </div>
                </div>

                <div className="links part2">
                    <div className="links">
                        <a href="#">Careers</a>
                    </div>
                    <div className="links">
                        <a href="#">Support</a>
                    </div>
                    <div className="links">
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className="btn-copyright">
                    <Button text={"Request Invite"} />
                    <p>&#169; Easybank. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
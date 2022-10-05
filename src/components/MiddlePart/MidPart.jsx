import React from 'react'
import Button from '../Button/Button';
import deskBg from '../../images/bg-intro-desktop.svg';
import imgMocks from '../../images/image-mockups.png';
import './Midpart.css';

const MidPart = () => {
    return (
        <section className="mid-portion-container">
            <div className="left-part">
                <h1>Next Generation Digital Banking</h1>
                <p>Take you finacial life online. Your
                Easybank account will be a one-stop-shop
                for spending, saving, budgeting, investing, 
                and much more.</p>
                <Button text="Request Invite" placeholder={"midpart"} />
            </div>
            <div className="right-part">
                <div className="imageWrapper">
                    <img src={deskBg} alt="SVGDeskBG" id="deskImg" />
                    <img src={imgMocks} alt="imgMocks" id="mockImg" />
                </div>
            </div>
        </section>
    );
}

export default MidPart;
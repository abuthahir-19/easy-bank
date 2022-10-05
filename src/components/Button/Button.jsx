import React from 'react';
import '../../App.css';

const Button = ({ text, placeholder }) => {
    const name = `button ${placeholder}`
    return (
        <div className={name}>
            <button>{ text }</button>
        </div>
    );
};

export default Button;
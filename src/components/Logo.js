import React from 'react';
import './css/Logo.css'

const Logo = ({type}) => {
    return (
        <h1 id="logo">
            {type} Reservation Words
        </h1>
    );
};

export default Logo;
import React from "react";
import {Link} from 'react-router-dom';
import './css/Nav.css'

const Nav = ({type}) => {
    return (
        <header className="topnav">
            <Link to="/db">DB</Link>
            <Link to="/language">Language</Link>
            <Link to="/service">Service</Link>
        </header>
    );
};

export default Nav;
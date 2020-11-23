import React from "react";
import './css/Nav.css'
import {withRouter} from "react-router-dom"

const Nav = (props) => {
    const changeService = (service) => {
        props.flush()
        props.history.push("/" + service)
    };

    return (
        <header className="topnav">
            <li onClick={() => changeService("DB")}>DB</li>
            <li onClick={() => changeService("Language")}>Language</li>
            <li onClick={() => changeService("Service")}>Service</li>
            <a href="https://github.com/always0ne/reserved-words" target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + '/img/github.png'} alt="check"/>
            </a>
        </header>
    );
};

export default withRouter(Nav);
import React from "react";
import './css/Nav.css'
import withRouter from "react-router-dom/es/withRouter";

const Nav = (props) => {
    const changeService = (service) => {
        props.flush()
        props.history.push("/" + service)
    };

    return (
        <header className="topnav">
            <ll>
                <li onClick={() => changeService("DB")}>DB</li>
                <li onClick={() => changeService("Language")}>Language</li>
                <li onClick={() => changeService("Service")}>Service</li>
            </ll>
            <a href="https://github.com/always0ne/reserved-words">
                <img src={process.env.PUBLIC_URL + '/img/github.png'} alt="check"/>
            </a>
        </header>
    );
};

export default withRouter(Nav);
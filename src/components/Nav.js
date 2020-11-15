import React from "react";
import {Link} from 'react-router-dom';
import './css/Nav.css'
import withRouter from "react-router-dom/es/withRouter";

const Nav = (props) => {
    const changeService = (service) => {
        props.flush()
        props.history.push("/"+service)
    };

    return (
        <header className="topnav">
            <ll>
                <li onClick={()=>changeService("DB")}>DB</li>
                <li onClick={()=>changeService("Language")}>Language</li>
                <li onClick={()=>changeService("Service")}>Service</li>
            </ll>
        </header>
    );
};

export default withRouter(Nav);
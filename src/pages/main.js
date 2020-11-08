import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Selector from "../components/Selector";
import Result from "../components/Result";
import Recommand from "../components/Recommand";
import './main.css'

const Main = ({type}) => {
    return (
        <div className="main">
            <Nav/>
            <Logo type={type}/>
            <Search/>
            <Selector type={type}/>
            <Result/>
            <Recommand/>
            <footer/>
        </div>
    );
};

export default Main;
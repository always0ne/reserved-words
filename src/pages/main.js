import React, {useState} from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Selector from "../components/Selector";
import Result from "../components/Result";
import Recommand from "../components/Recommand";
import './main.css'

const Main = ({type}) => {
    const [checklist, setChecklist] = useState([]);
    const [searchString, setSearchString] = useState("");

    const getVersions = (selectedValue) => {
        setChecklist(selectedValue);
        console.log(checklist)
    };

    const searchReservations = (string) => {
        setSearchString(string);
        console.log(searchString)
    };
    
    return (
        <div className="main">
            <Nav/>
            <Logo type={type}/>
            <Search onSubmit={searchReservations}/>
            <Selector type={type} onSubmit={getVersions}/>
            <Result/>
            <Recommand/>
            <footer/>
        </div>
    );
};

export default Main;
import React, {useEffect, useState} from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Selector from "../components/Selector";
import Result from "../components/Result";
import Recommend from "../components/Recommend";
import Footer from "../components/Footer"
import {Promise} from "bluebird";
import './main.css'

const Main = ({type}) => {
    const [checklist, setChecklist] = useState([]);
    const [words, setWords] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [result, setResult] = useState([]);
    const [recommends, setRecommends] = useState("");
    const [search, setSearch] = useState(false);

    const getVersions = (selectedValue) => setChecklist(selectedValue);
    const validateUsable = (list, string) => list.reserved.filter(words => words === string).length === 0;
    const getSearchStrings = (string) => {
        setSearchString(string);
        setSearch(true)
    };
    const flush = () => {
        setSearchString("");
        setChecklist([]);
        setResult([]);
        setRecommends([]);
        setWords([]);
    };

    useEffect(() => {
        Promise.mapSeries(checklist, (category) => {
            let categoryData = category.split(' ');
            if (categoryData[0] === "c#") {
                categoryData[0] = "cSharp";
                categoryData[1] = "cSharp";
            }
            return fetch(process.env.PUBLIC_URL + '/data/' + type + '/' + categoryData[0] + '/' + categoryData[1] + '.json')
                .then(response => response.json());
        }).then(json => setWords(json));
        // eslint-disable-next-line
    }, [checklist]);

    useEffect(() => {
        // Must changed
        setResult(words.map((reserved) => validateUsable(reserved, searchString)));
        // eslint-disable-next-line
    }, [words]);

    useEffect(() => {
        if (search === true) {
            setResult(words.map((reserved) => validateUsable(reserved, searchString)));
            setSearch(false)
        }
        // eslint-disable-next-line
    }, [search]);

    useEffect(() => {
        // 검색 후 불가한 DB가 생기면 동의어 조회해서 여기에 넘겨주면 됨
        setRecommends("")
    }, [result]);

    return (
        <div>
            <div className="contents-wrap">
                <Nav type={type} flush={flush}/>
                <Logo type={type}/>
                <Search type={type} onSubmit={getSearchStrings}/>
                <Selector type={type} onSubmit={getVersions}/>
                <Result result={result} checklist={checklist} searchStr={searchString}/>
                <Recommend recommands={recommends} searchString={searchString}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
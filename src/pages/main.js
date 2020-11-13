import React, {useEffect, useState} from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Selector from "../components/Selector";
import Result from "../components/Result";
import Recommend from "../components/Recommend";

import './main.css'

const Main = ({type}) => {
    const [checklist, setChecklist] = useState([]);
    const [words, setWords] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [result, setResult] = useState([]);
    const [recommends, setRecommends] = useState("");
    const [search, setSearch] = useState(false);

    const getVersions = (selectedValue) => setChecklist(selectedValue);
    const validateUsable = (list, string) => list.filter(words => words === string).length === 0;
    const getSearchStrings = (string) => {
        setSearchString(string);
        setSearch(true)
    };

    useEffect(() => {
        //setWords(words.filter(data => data == null))
        let list = [];
        checklist.map((category) => {
            let categoryData = category.split(' ');
            fetch(process.env.PUBLIC_URL + '/data/' + type + '/' + categoryData[0] + '/' + categoryData[1] + '.json')
                .then(response => response.json())
                .then(json => {
                    list.push(json.reserved)
                });
            return true;
        });
        setWords(list)
        // eslint-disable-next-line
    }, [checklist]);

    useEffect(() => {
        // Must changed
        // data load time(useEffect don't wait all load is completed)
        setTimeout(()=>setResult(words.map((reserved) => validateUsable(reserved, searchString))),200)
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
        <div className="main">
            <Nav/>
            <Logo type={type}/>
            <Search onSubmit={getSearchStrings}/>
            <Selector type={type} onSubmit={getVersions}/>
            <Result result={result} checklist={checklist}/>
            <Recommend recommands={recommends} searchString={searchString}/>
            <footer>
                <div id="copyright">Copyright 2020 <b>SSU</b></div>
                <div>
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                </div>

            </footer>
        </div>
    );
};

export default Main;
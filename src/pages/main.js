import React, {useEffect, useState} from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Selector from "../components/Selector";
import Result from "../components/Result";
import Recommand from "../components/Recommand";
import './main.css'

const Main = ({type}) => {
    const [checklist, setChecklist] = useState([]);
    const [words, setWords] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [result, setResult] = useState([]);
    const [recommends, setRecommends] = useState("");

    const getVersions = (selectedValue) => setChecklist(selectedValue);
    const getSearchStrings = (string) => setSearchString(string);
    const validateUsable = (list, string) => list.filter(words => words === string).length === 0;

    useEffect(() => {
        setWords(words.filter(data => data == null))
        // eslint-disable-next-line
    }, [checklist]);

    useEffect(() => {
        if (words.length === 0) {
            checklist.map((category) => {
                let categoryData = category.split(' ');
                fetch(process.env.PUBLIC_URL + '/data/' + type + '/' + categoryData[0] + '/' + categoryData[1] + '.json')
                    .then(response => response.json())
                    .then(json => words.push(json.reserved));
                return true;
            });
        }
        // eslint-disable-next-line
    }, [words]);

    useEffect(() => {
        setResult(words.map((reserved, index) => validateUsable(reserved, searchString)));
        // eslint-disable-next-line
    }, [searchString]);

    useEffect(() => {
        console.log(result);
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
            <Recommand recommands={recommends}/>
            <footer/>
        </div>
    );
};

export default Main;
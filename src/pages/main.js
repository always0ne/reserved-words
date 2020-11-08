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
    const [usable, setUsable] = useState([]);
    const [recommends, setRecommends] = useState("");

    const getVersions = (selectedValue) => {
        setChecklist(selectedValue);
        console.log(checklist)
    };

    const searchReservations = (string) => {
        setSearchString(string);
        console.log(searchString);
        // 이전 구조처럼 public 폴더에 데이터 폴더 옯기고 작업하면 가능
            fetch(process.env.PUBLIC_URL+'/data/test.json')
                .then(response => response.json())
                .then(response => console.log(response))
        // 검색로직 여기에 하거나 따로 파일 빼도 됨
        // 검색 (json 파일 열람 하여 스캔)
        // 통과한 checklist 추가
        setUsable("");
        // 검색 후 불가한 DB가 생기면 동의어 조회해서 여기에 넘겨주면 됨
        setRecommends("")
    };


    return (
        <div className="main">
            <Nav/>
            <Logo type={type}/>
            <Search onSubmit={searchReservations}/>
            <Selector type={type} onSubmit={getVersions}/>
            <Result result={usable}/>
            <Recommand recommands={recommends}/>
            <footer/>
        </div>
    );
};

export default Main;
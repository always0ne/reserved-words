import React, {useEffect, useState} from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Selector from "../components/Selector";
import Result from "../components/Result";
import Recommand from "../components/Recommand";
import './main.css'



function searchInput(str){
    fetch(process.env.PUBLIC_URL + '/data/test.json')
            .then(response => response.json())
            .then(data=>{
                let upperStr=str.toUpperCase();
                
                for(let i=0;i<data.reserved.length;i++){
                    if(upperStr===data.reserved[i]){
                        console.log("available: ",str);
                        return true;
                        //avail=true;
                        //setUsable(usable.concat())
                        
                    }
                    
                }
                
                
            });
    
    
}

const Main = ({type}) => {
    const [checklist, setChecklist] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [usable, setUsable] = useState([]);
    const [recommends, setRecommends] = useState("");

    const getVersions = (selectedValue) => setChecklist(selectedValue);
    const getSearchStrings = (string) => setSearchString(string);

    useEffect(() => {
        console.log(checklist);
        // 이부분에서 검사할 json들 로드.(json 인덱스 순서도 맞춰주자) 아마 하나바뀔때마다 반영되어 쉬울듯
        // 리스트에서 추가된 부분 처리
        // 이전 구조처럼 public 폴더에 데이터 폴더 옯기고 작업하면 가능
        
        fetch(process.env.PUBLIC_URL + '/data/test.json')
            .then(response => response.json())
            .then(response => console.log(response));
        
        // 리스트에서 제거된 부분 처리
        
    }, [checklist]);
    
    useEffect(() => {
        console.log(searchString);
        // 검색로직 여기에 하거나 따로 파일 빼도 됨

        searchInput(searchString);//검색 결과 console출력, 리턴 아예 못받네..
        
        // 통과한 checklist 추가
        setUsable("");
        // 검색 후 불가한 DB가 생기면 동의어 조회해서 여기에 넘겨주면 됨
        setRecommends("")
    }, [searchString]);

    return (
        <div className="main">
            <Nav/>
            <Logo type={type}/>
            <Search onSubmit={getSearchStrings}/>
            <Selector type={type} onSubmit={getVersions}/>
            <Result result={usable}/>
            <Recommand recommands={recommends}/>
            <footer/>
        </div>
    );
};

export default Main;
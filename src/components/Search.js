import React, {useState} from 'react';
import './css/Search.css';

const Search = () => {
    const [searchStr, setSearchStr] = useState("");

    const getSearchString = (e) => {
        setSearchStr(e.target.value);
        console.log(searchStr);
    };
    return (
        <form className="search">
            <input className="search_box" placeholder="search" value={searchStr} type="text"
                   onChange={getSearchString}/>
            <button className="search_btn" type="reset">Search</button>
        </form>
    )
};

export default Search;
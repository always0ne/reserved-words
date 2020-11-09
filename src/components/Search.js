import React, {useState} from 'react';
import './css/Search.css';

const Search = (props) => {
    const [searchStr, setSearchStr] = useState("");

    const getSearchString = (e) => {
        setSearchStr(e.target.value);
    };

    const searchReservations = (value) => {
        props.onSubmit(searchStr)
    };
    return (
        <div className="search">
            <input className="search_box" placeholder="search" value={searchStr} type="text"
                   onChange={getSearchString}/>
            <button className="search_btn" onClick={searchReservations}>Search</button>
        </div>
    )
};

export default Search;
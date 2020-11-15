import React, {useState} from 'react';
import './css/Search.css';

const Search = (props) => {
    const [searchStr, setSearchStr] = useState("");

    const getSearchString = (e) => setSearchStr(e.target.value);
    const searchReservations = () => {
        if (props.type === 'DB')
            props.onSubmit(searchStr.toUpperCase());
        else
            props.onSubmit(searchStr);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter")
            searchReservations()
    };

    return (

        <div className="search">
            <input className="search_box" placeholder="search" value={searchStr} type="text"
                   onChange={getSearchString} onKeyPress={handleKeyPress}/>
            <button className="search_btn" onClick={searchReservations}>Search</button>
        </div>
    )
};

export default Search;
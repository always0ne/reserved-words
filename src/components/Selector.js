import React, {useEffect, useState} from 'react';
import db from '../data/db/versions';
import language from '../data/language/versions';
import service from '../data/service/versions';
import './css/Selector.css'

const Selector = ({type, onSubmit}) => {
    const [selected, setSelected] = useState([]);
    let lists = [];
    if (type === "DB")
        lists = db;
    else if (type === "Language")
        lists = language;
    else if (type === "Service")
        lists = service;
    const printchange = (e) => {
        if (e.target.checked)
            setSelected(selected.concat(e.target.value));
        else
            setSelected(selected.filter(version => version !== e.target.value));
    };
    useEffect(() => {
        onSubmit(selected)
        // eslint-disable-next-line
    }, [selected]);

    return (
        <ol className="test">
            {lists.map((content) =>
                <li className="category">
                    {content.category}
                    <ul>
                        {content.version.map((versions, index) =>
                            <li key={index} className="versions">
                                <label>
                                    <input
                                        type="checkbox"
                                        value={content.category + " " + versions}
                                        onChange={printchange}
                                    />{versions}
                                </label>
                            </li>)
                        }
                    </ul>
                </li>
            )}
        </ol>
    )
};

export default Selector;
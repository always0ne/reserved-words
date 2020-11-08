import React, {useState} from 'react';
import db from '../data/db/versions';
import language from '../data/language/versions';
import service from '../data/service/versions';
import './css/Selector.css'

const Selector = (props) => {
    const [selected, setSelected] = useState([]);

    let lists = [];
    if (props.type === "DB")
        lists = db;
    else if (props.type === "Language")
        lists = language;
    else if (props.type === "Service")
        lists = service;
    const printchange = (e) => {
        if (e.target.checked)
            setSelected(selected.concat(e.target.value));
        else
            setSelected(selected.filter(version => version !== e.target.value));
        props.onSubmit(selected)
    };

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
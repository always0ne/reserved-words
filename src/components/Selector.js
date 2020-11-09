import React, {useEffect, useState} from 'react';
import './css/Selector.css'

const Selector = ({type, onSubmit}) => {
    const [selected, setSelected] = useState([]);
    const [lists, setLists] = useState([]);

    useEffect(() => fetch(process.env.PUBLIC_URL + '/data/' + type + '/versions.json')
        .then(response => response.json())
        .then(response => {
            setLists(response);
            console.log(lists);
            console.log("load complete")
            // eslint-disable-next-line
        }), [type]);

    const printChange = (e) => {
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
                                        onChange={printChange}
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
import React, {useEffect, useState} from 'react';
import './css/Selector.css'
import './css/More.css'
import Category from './Category'

const Selector = ({type, onSubmit}) => {
    const [selected, setSelected] = useState([]);
    const [lists, setLists] = useState([]);


    useEffect(() => fetch(process.env.PUBLIC_URL + '/data/' + type + '/versions.json')
        .then(response => response.json())
        .then(response => {
            setLists(response);
            // eslint-disable-next-line
        })
        .then(() => setSelected([])
        ), [type]);

    const printChange = async (checked, value) => {
        if (checked)
            setSelected(selected.concat(value));
        else {
            if (value[0].length === 1)
                setSelected(selected.filter(version => version !== value));
            else {
                let newList = selected;
                await value.map((value) => newList = newList.filter(version => version !== value));
                setSelected(newList);
            }
        }
    };
    useEffect(() => {
        onSubmit(selected)
        // eslint-disable-next-line
    }, [selected]);

    return (
        <div>
            <h2 id="instruction">Select your environments!</h2>
            <ol className="test">
                {lists.map((content, index) =>
                    <Category content={content} key={index} printChange={printChange}/>
                )}
            </ol>
        </div>

    )
};

export default Selector;
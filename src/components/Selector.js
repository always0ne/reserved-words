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
            {lists.map((content,index) =>
                <li className="category">
                    {content.category}
                    {/*<More id={index} value={content.category} changeMore={changeMore}/>*/}
                <Category content={content} index={index} printChange={printChange}/>
                </li>
            )}
        </ol>
    )
};

export default Selector;
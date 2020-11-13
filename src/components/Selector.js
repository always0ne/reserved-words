import React, {useEffect, useState} from 'react';
import './css/Selector.css'
import './css/More.css'
import More from './More'

const Selector = ({type, onSubmit}) => {
    const [selected, setSelected] = useState([]);
    const [lists, setLists] = useState([]);
    const [mores,setMores]=useState([
        {value:'',
            status:''}
    ]);
    const {value,status}=mores;
    const [hides,setHides]=useState([]);

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
    const changeMore=(id,value,more)=> {
        console.log(id);
        console.log(value);
        console.log(more);
        //토글된 상태

        //more==='hide'?categoryUl.current.style.display="none":categoryUl.current.style.display="block";

    }

        return (
        <ol className="test">
            {lists.map((content,index) =>
                <li className="category">
                    {content.category}
                    <More id={index} value={content.category} changeMore={changeMore}/>

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
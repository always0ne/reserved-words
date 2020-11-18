import React, {useEffect, useState} from 'react';
import {Collapse} from "react-collapse/lib/Collapse";
import './css/Category.css';

const Category = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    useEffect(()=>{
        setIsOpened(false)
    },[props.content]);
    return (
        <div className="category">
            <input
                className="input"
                type="checkbox"
                checked={isOpened}
                onChange={({target: {checked}}) => setIsOpened(checked)}/>
            {props.content.category}
            <li className="category">
                <Collapse isOpened={isOpened}>
                    <ul>
                        {props.content.version.map((versions, index) =>
                            <li key={versions + index} className="versions">
                                <label>
                                    <input
                                        type="checkbox"
                                        value={props.content.category + " " + versions}
                                        onChange={props.printChange}
                                    />{versions}
                                </label>
                            </li>)
                        }
                    </ul>
                </Collapse>
            </li>
        </div>
    )
}


export default Category;
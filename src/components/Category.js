import React, {useEffect, useState} from 'react';
import {Collapse} from "react-collapse/lib/Collapse";
import './css/Category.css';

const Category = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const [versionBox, setVersionBox] = useState([]);
    useEffect(() => {
        setIsOpened(false)
        setVersionBox(props.content.version.map(() => {
            return false
        }));
    }, [props.content]);

    function collapseVersions() {
        if (isOpened === true) {
            setVersionBox(Array.from(({length: versionBox.length}), ()=> false));
        } else {
            setVersionBox(Array.from(({length: versionBox.length}), ()=> true));
        }
        let versionLists = props.content.version.map((versions, index) => props.content.category + " " + versions)
        props.printChange(!isOpened,versionLists)
        setIsOpened(!isOpened)
    }

    function reportChecked(e, index) {
        setVersionBox(versionBox.slice(0,index).concat(e.target.checked).concat(versionBox.slice(index + 1)));
        props.printChange(e.target.checked, e.target.value)
    }

    return (
        <div className="category">
            <label>
                <input
                    type="checkbox"
                    value={props.content.category}
                    checked={isOpened}
                    onChange={collapseVersions}
                />{props.content.category}
            </label>
            <li className="category">
                <Collapse isOpened={isOpened}>
                    <ul>
                        {
                            props.content.version.map((versions, index) => {
                                return (<li key={versions + index} className="versions">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={props.content.category + " " + versions}
                                            checked={versionBox[index]}
                                            onChange={(e) => reportChecked(e, index)}
                                        />{versions}
                                    </label>
                                </li>)
                            })
                        }
                    </ul>
                </Collapse>
            </li>
        </div>
    )
}


export default Category;
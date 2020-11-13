import React,{Component,useState} from 'react';
import {Collapse} from "react-collapse/lib/Collapse";
import './css/Category.css';
class Category extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,

        };
    }

    render(){
        const {isOpened}=this.state;
        const {content,index,printChange}=this.props;
        return (
            <div className="category">
                <input
                    className="input"
                    type="checkbox"
                    checked={isOpened}
                    onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
                {content.category}
                <li className="category">

                    <span>

                        <Collapse isOpened={isOpened}>
                            <ul>
                                {content.version.map((versions) =>
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
                        </Collapse>

                    </span>
                </li>
            </div>


        )
    }
}

export default Category;
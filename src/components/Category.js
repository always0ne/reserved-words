import React,{Component} from 'react';
import {Collapse} from "react-collapse/lib/Collapse";

class Category extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false

        };
    }
    render(){
        const {isOpened}=this.state;
        const {content,index,printChange}=this.props;
        return (
            <span>
                <input
                    className="input"
                    type="checkbox"
                    checked={isOpened}
                    onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
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


        )
    }
}

export default Category;
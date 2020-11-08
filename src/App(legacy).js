import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state = {
            type: "DB",
            second: "",
            searchStr: " ",
            info: [
                {
                    first: "",
                    second: "",
                    third: ""
                }
            ]
        }
    }

    render() {
        const {type} = this.state;
        return (
            <div>
                <div class="selector">
                    {this.FetchDBList()}
                </div>
                <result>
                    {this.MakeTable()}
                </result>
                <recommand/>
            </div>
        )
    }

    MakeTable = () => {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Available</th>
                    </tr>
                    {v
                        .filter((detail) => detail.data === this.state.type)
                        .map((detail) => {
                            return (
                                <tr>
                                    <td>{detail.db}</td>
                                    <td>ok</td>
                                </tr>
                            )
                        })}
                </table>
            </div>
        )
    }
}


export default App;

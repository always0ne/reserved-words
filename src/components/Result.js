import React from 'react';
import './css/Result.css'

const Result = (props) => {

    const printTrueFalse = (result) => {
        if (result === undefined)
            return "";
        else if (result === true)
            return "True";
        else if (result === false)
            return "False"
    };

    return (
        <table>
            <tr>
                <th>version</th>
                <th>available</th>
            </tr>
            {
                props.checklist.map((v, index) =>
                    <tr>
                        <td>{v}</td>
                        <td>{printTrueFalse(props.result[index])}</td>
                    </tr>
                )}
        </table>
    )
};

export default Result;
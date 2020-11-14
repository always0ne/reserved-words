import React from 'react';
import './css/Result.css'

const Result = (props) => {

    const printTrueFalse = (result) => {
        if (result === undefined)
            return "";
        else if (result === true)
            return <img className="resultImg" src={process.env.PUBLIC_URL+'/img/check_image.png'} alt="check"/>
        else if (result === false)
            return <img className="resultImg" src={process.env.PUBLIC_URL+'/img/cross_image.png'} alt="cross"/>
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
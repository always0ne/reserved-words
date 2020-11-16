import React from 'react';
import './css/Result.css'

const Result = (props) => {

    const printTrueFalse = (result) => {
        if (props.searchStr === '')
            return <img className="resultImg" src={process.env.PUBLIC_URL + '/img/question_image.png'} alt="check"/>;
        if (result === undefined)
            return <img className="resultImg" src={process.env.PUBLIC_URL + '/img/question_image.png'} alt="check"/>;
        else if (result === true)
            return <img className="resultImg" src={process.env.PUBLIC_URL + '/img/check_image.png'} alt="check"/>;
        else if (result === false)
            return <img className="resultImg" src={process.env.PUBLIC_URL + '/img/cross_image.png'} alt="cross"/>;
    };

    return (
        <div>
            <h2>Availability of "{props.searchStr}"</h2>
            <table>
                <tbody>
                <tr>
                    <th>version</th>
                    <th>available</th>
                </tr>
                {
                    props.checklist.map((v, index) =>
                        <tr key={index}>
                            <td>{v}</td>
                            <td>{printTrueFalse(props.result[index])}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};

export default Result;
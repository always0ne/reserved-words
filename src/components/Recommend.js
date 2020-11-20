import React, {useEffect, useState} from 'react';
import './css/Recommend.css';


const Recommend = (props) => {
    const [dictionary, setDictionary] = useState([]);
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data/csvjson.json')
            .then(response => response.json())
            .then(data => setDictionary(data));
    }, []);

    const recommendWords = () => {
        if (props.usable === false) {
            let result = dictionary.find(data => data.reserved === props.searchString)
            if (result !== undefined) {
                let resultString = "";
                result.recommend.map(data => {
                    if (resultString === "")
                        resultString = resultString.concat(data);
                    else
                        resultString = resultString.concat(", ", data);
                    return true
                });
                return (
                    <div>
                        <h3>{resultString}</h3>
                        <h3>If there is a better variable name, please recommend it!</h3>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h3>We haven't found a suitable variable name yet.<br/>
                        If there is a good variable name, please recommend it!</h3>
                    </div>
                )
            }
        }
    };

    return (
        <div id="recommend">
            <h2>Recommend Words</h2>
            {recommendWords()}
            <button type="button" onClick={() =>window.open('https://github.com/always0ne/reserved-words/issues/33')}>
                Recommend variable names!
            </button>
        </div>
    )
};

export default Recommend;
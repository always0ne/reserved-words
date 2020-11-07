//this for test.not using
import React, { Component, version } from 'react';
import v from "./version.json";


class Testing extends Component{
    render(){
        return(
            <div>
                {v.map((detail)=>{
                    return <div>
                        <h3>{detail.data}</h3>
                        <h4>{detail.db}</h4>
                        <h5>{detail.version}</h5>
                        </div>
                })}
            </div>
        )
            
    }
}
export default Testing;
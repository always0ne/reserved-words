// import React, { Component } from 'react';

const fs=require('fs');
const path=fs.readdirSync('./src/data/db');
const type=Object.values(path);

function returnType(){
    return type;
}
// class Selector extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             type:{type}
//         }
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.type}
//             </div>
//         )
//     }
// }
// export default Selector;
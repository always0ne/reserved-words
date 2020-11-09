import { Component, version } from "react";


function MkResultTable(props){
    
    return(
        <table>
            <tr>
                <th>version</th>
                <th>available</th>
            </tr>
            
            
                {props.version.map((v,index)=>
                    <tr>
                        <td>{v}</td>
                        <td>{props.available[index]}</td>
                        
                    </tr>
                )}
                
            
            
            {/* <tr>
                <td>{props.version[0]}</td>
                <td>{props.available[0]}</td>
            </tr> */}
        </table>
        
        
    )
}
// class MkResultTable extends Component{
//     constructor(props){
        

//     }
    
//     render(){
//         const {version,available}=this.props;
//         for(let i=0;i<version.length;i++){
//             return(
//                 <tr>
//                     <td>{version}</td>
//                     <td>{available}</td>
//                 </tr>
//             )
//         }
//     }
// }
export default MkResultTable


// .map((detail) => {
//     return (
//         <tr>
//             <td>{detail.db}</td>
//             <td>ok</td>
//         </tr>
//     )
// })}
import React,{useState} from 'react';
//import './css/More.css'
const More=({id,value, changeMore})=>{
    const [more,setMore]=useState('more');

    return(
        <b onClick={()=>{
            if(more==='more'){
                setMore('hide');
            }else{
                setMore('more');
            }
            changeMore(id,value,more);
        }}> {more}</b>
    )
}

export default More;

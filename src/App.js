import React, { Component, Fragment } from 'react';
import NavBtn from './NavbarBtn';
import './App.css';
import v from "./version.json";



class App extends React.Component{
  constructor(props){
    super(props);
    this.input=React.createRef();
    this.state={
      type:"DB",
      second:"",
      str:"Reservation Words",
      searchStr:" ",
      info:[
        {
          first:"",
          second:"",
          third:""
        }
      ]
    }
  }
  
  Search=()=>{
    console.log(this.input);
    return (
        <div class="search">
          <form>
            <input class="search_box" placeholder="search" type="text" onChange={this.handleSearch}></input>
            <button class="search_btn" type="reset">Search</button>
            </form>
        </div>
    )
  }
 
  handleSearch=(e)=>{
    this.setState({
      searchStr:e.target.value
    })
    console.log(this.state.searchStr);
  }
  handleDropDown=(second,e)=>{
    
    console.log(e.target.value)
    this.setState({
      info:this.state.info.concat({first:this.state.type, second:second, third:e.target.value})
    })

    console.log("state info: ",this.state.info);
  }
  changeType=(type)=>{
    this.setState({
      type:type,
    })
  }
  
  MakeDropdown=(second)=>{
    const arr=[]
    return(
      
        
      v
        .filter((detail)=>detail.data===this.state.type)
        .filter((detail2)=>detail2.db===second)
        .map((detail3)=>{
          return(
          
          <select onChange={(e)=>this.handleDropDown(second,e)}>
            <option>select</option>
            {detail3.version.map(d=>{return(<option value={d}>{d}</option>)})}
            
          </select>
          
          )
        })
        
    )
    
      
  
  }
  FetchDBList=()=>{
    return(
      <div>
          
          <div>
              {v
              .filter((detail)=>detail.data===this.state.type)
              .map((detail)=>{
                  return( 
                      <div>
                          <span id={detail.db}>{detail.db}</span>
                          {/* <input type="checkbox" id={detail.db}></input> */}
                          {this.MakeDropdown(detail.db)}
                      </div>
                  )
              })}
          </div>
      </div>
      
    )
  }
  MakeTable=()=>{
    return(
      <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Available</th>
            </tr>
            {v
            .filter((detail)=>detail.data===this.state.type)
            .map((detail)=>{
              return(
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
  render(){
    const {type,str}=this.state;
    return(
    
    <div>
      
      <header class="topnav">
        <NavBtn type={()=>(this.changeType("DB"))}>DB</NavBtn>
        <NavBtn type={()=>(this.changeType("Lang"))}>Lang</NavBtn>
        <NavBtn type={()=>(this.changeType("Service"))}>Service</NavBtn>
      </header>
      <body>
        <div class="logo"><h1>{type} {str}</h1></div>
        {this.Search()}
        <div class="selector">
          {this.FetchDBList()}

        </div>
        <result>
          {this.MakeTable()}
        </result>
        <recommand></recommand>
      </body> 
      <footer>footer</footer>
    </div>
    )
  }
}


export default App;

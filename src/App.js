//import logo from './logo.svg';
import './App.css';
import React from 'react';
// import test from './test.json';

// function f1(){
//   console.log(`this is func1`);
//   const loc=window.location.pathname;
//   console.log(test);
//   //path: src/data/db/*.json
// }
// function showVersion(){
//   let x=document.getElementsByClassName("version");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      type:"DB",
      str:"Reservation Words",
    }
  }
  changeToDB=()=>{
    this.setState({
      type:"DB",
    })
  }
  changeToLang=()=>{
    this.setState({
      type:"Lang",
    })
  }
  changeToService=()=>{
    this.setState({
      type:"Service",
    })
  }
  
  render(){
    
    return(
    
    <div>
      
      <header class="topnav">
        <a href="#!" onClick={this.changeToDB.bind(this)}>DB</a>
        <a href="#!" onClick={this.changeToLang.bind(this)}>Lang</a>
        <a href="#!" onClick={this.changeToService.bind(this)}>Service</a>
      </header>
      <body>
        <div class="logo"><h1>{this.state.type} {this.state.str}</h1></div>
        <div class="search">
            <input class="search_box" placeholder="search"></input>
            <button class="search_btn" type="input" >Search</button>
        </div>
        <div class="selector">
          <input type="checkbox" value="1" id="oracle"></input>
          <label for="oracle">Oracle</label>
          <input type="checkbox" value="2" id="mysql"></input>
          <label for="oracle">MySQL</label>
          <input type="checkbox" value="3" id="mariaDB"></input>
          <label for="oracle">MariaDB</label>

        </div>
        {/* <button onclick="this.showVersion()">Try it</button>
        <div class="version"></div> */}
        <result></result>
        <recommand></recommand>
      </body> 
      <footer>footer</footer>
    </div>
    )
  }
}


export default App;

import React,{ Component } from "react";
import './App.css';
import fire from "./config/fire";
import Login from "./config/Login";
import register from "./config/register";
import client from "./config/client";
import advocate from "./config/advocate";
import Home from "./Home";


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      user: {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user)
      {
        this.setState({user})
      }
    else
        {
          this.setState({user: null})
        }  
    })
  }
  render(){
    return (
      <div className="App">
      {this.state.user ?(<Home/>) : (<Login/>)}
      </div>
    );
  }
}


export default App;

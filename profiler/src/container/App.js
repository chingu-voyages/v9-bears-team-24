import React from 'react';
import Profile from './Profile';
import LogIn from '../component/Login';
import Register from '../component/Register';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			Route: "login"
		}
	}

  onRouteChange = (route) =>{
  	this.setState({ Route: route})
  }
  render(){
  return (
    <div className="App">
    {(this.state.Route === "home") ? <Profile/> : (this.state.Route === "login") ? <LogIn onRouteChange={this.onRouteChange}/> : <Register onRouteChange={this.onRouteChange}/>}
    </div>
  );
}
}


export default App;

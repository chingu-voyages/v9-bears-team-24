import React, {Suspense, Lazy} from 'react';
import Profile from './Profile';
import LogIn from '../component/Login';
import Register from '../component/Register';
import Contacts from '../container/Contacts';
import { Route } from 'react-router-dom'

const initialState = {
        email:"",
        gender:"",
        name: "",
        age:"",
        socialLinks:{
          FaceBook:"",
          Twitter:"",
          Instagram:"",
          LinkedIn:"",
          Github:"",
          Website:"",
        }
      }


class App extends React.Component {
  // You can just use state here, the linter does the work for you ;)
  constructor(){
    super();
    this.state = initialState;
  }
  

	loadUser = (data)=>{
    this.setState((state, props) => {
      console.log("new state", data)
      return {
                    id: data.id,
                    name:data.name,
                    email: data.email,
                     }}
              )
  }

   render() {
    
    return (
        <div className="App">
          <Suspense fallback={<div><h3>Loading...</h3></div>}>
            <Route exact path="/" render={(props) => <LogIn {...props} loadUser={this.loadUser} />} />
            <Route path="/register" render={(props) => <Register {...props} loadUser={this.loadUser} />}/>
            <Route path="/profile" render={(props) => <Profile {...props} state={this.state} />} />
            <Route path="/contacts" render={(props) => <Contacts {...props} state={this.state} />} />
          </Suspense>
        </div>
    );
  }
}


export default App;

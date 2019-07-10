import React, {Suspense, Lazy} from 'react';
import Profile from './Profile';
import LogIn from '../component/Login';
import Register from '../component/Register';
import { Route } from 'react-router-dom'

const State = {
        email:"",
        password:"",
        naam: ""
      }


class App extends React.Component {
  // You can just use state here, the linter does the work for you ;)
	loadUser = ()=>{

  } 
   render() {
    return (
        <div className="App">
          <Suspense fallback={<div><h3>Loading...</h3></div>}>
            <Route exact path="/" component={LogIn} />
            <Route path="/register" component={Register} state={State}/>
            <Route path="/profile" component={Profile} />
          </Suspense>
        </div>
    );
  }
}


export default App;

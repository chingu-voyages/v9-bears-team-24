import React from 'react';
import Profile from './Profile';
import LogIn from '../component/Login';
import Register from '../component/Register';
import { Route } from 'react-router-dom'

class App extends React.Component {
  // You can just use state here, the linter does the work for you ;)
	state = {
			Route: "login"
	}
  
  render() {
    return (
        <div className="App">
          <Route exact path="/" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </div>
    );
  }
}


export default App;

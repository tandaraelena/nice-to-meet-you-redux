import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from '../layout/navbar';
import Home from '../home/home';
import SignIn from '../auth/sign-in';
import SignUp from '../auth/sign-up';
import CreateDay from '../days/create-day';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/create-day' component={CreateDay} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  
  }
}

export default App;

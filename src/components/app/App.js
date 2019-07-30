import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from '../layout/navbar';
import Home from '../home/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

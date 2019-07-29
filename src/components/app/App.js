import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../layout/navbar';
import Home from '../home/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Landing from './landing/Landing'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="">
        </div>
        <Switch>
          <Redirect from="/" to="/home" />
          <Route exact path="/home" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

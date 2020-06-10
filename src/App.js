import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Landing from './landing/Landing'
import Title from './title/Title'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="title-navbar-div">
          <Title/>
          <Navbar/>
        </div>
        <Switch>
          <Redirect from="/" to="/projects" />
          <Route exact path="/projects" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

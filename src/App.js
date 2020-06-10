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
          <Redirect exact from="/" to="/projects" />
          <Route exact path="/projects" component={Landing} />
          <Route exact path="/about" component={Landing} />
          <Route exact path="/contact" component={Landing} />
          <Route exact path="/blog" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Landing from './landing/Landing'
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import About from './about/About';
import Blog from './blog/Blog'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="title-navbar-div">
          <Navbar/>
        </div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

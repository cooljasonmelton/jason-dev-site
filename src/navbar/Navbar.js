import React from 'react';
import './Navbar.css';
import { withRouter } from 'react-router-dom'
import Landing from '../landing/Landing'

class Navbar extends React.Component{
  state = {}
  
  handleClick = e =>{
    this.setState({
      activeItem: e.target.dataset.space
    })
    this.props.history.push(`/${e.target.dataset.space}`)
  }

  handleLogoClick = e => {
    this.props.history.push(`/`)
    window.location.reload()
  }

  render(){
    const {activeItem} = this.state
    return (
      <div className="Navbar" >
        <div  
          onClick={this.handleLogoClick}
          className={activeItem === "projects" ? "clicked" : ""}
          data-space="projects" 
        >
          <u className="underline">Jason</u> 
          <u className="underline">Melton</u> 
        </div>
        <div  
          onClick={this.handleClick}
          className={activeItem === "projects" ? "clicked" : ""}
          data-space="projects" 
        >
          projects
        </div>
        <div  
          onClick={this.handleClick}
          className={activeItem === "about" ? "clicked" : ""}
          data-space="about" 
        >
          about
        </div>
        <div  
          onClick={this.handleClick}
          className={activeItem === "contact" ? "clicked" : ""}
          data-space="contact" 
        >
          contact
        </div>
        <div  
          onClick={this.handleClick}
          className={activeItem === "blog" ? "clicked" : ""}
          data-space="blog" 
        >
          blog
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);

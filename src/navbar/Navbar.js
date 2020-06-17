import React from 'react';
import './Navbar.css';
import { withRouter } from 'react-router-dom'
import Landing from '../landing/Landing'

class Navbar extends React.Component{
  state = { activeItem: ""}
  
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
    console.log(activeItem)
    return (
      <div className="Navbar" >
        <div 
          id="knockout"
          className={activeItem === "" ? "clicked" : ""}
 
          onClick={this.handleLogoClick}
        >
          Jason Melton
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

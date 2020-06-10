import React from 'react';
import './Navbar.css';
import { withRouter } from 'react-router-dom'
import Landing from '../landing/Landing'

class Navbar extends React.Component{
  state = {}

  componentDidMount(){
    this.setState({activeItem: "projects"})
  }
  
  handleClick = e =>{
    this.setState({
      activeItem: e.target.dataset.space
    })
    this.props.history.push(`/${e.target.dataset.space}`)
  }

  render(){
    const {activeItem} = this.state
    return (
      <div className="Navbar" >
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

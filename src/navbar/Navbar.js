import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{
  state = {}
  
  handleClick = e =>{
    console.log(e.target)
  }

  render(){
    return (
      <div className="Navbar" >
        <div onClick={this.handleClick}>
          home
        </div>
        <div onClick={this.handleClick}>
          about
        </div>
        <div onClick={this.handleClick}>
          projects
        </div>
        <div onClick={this.handleClick}>
          contact
        </div>
      </div>
    );
  }
}

export default Navbar;

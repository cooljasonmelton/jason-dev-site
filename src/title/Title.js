import React from 'react';
import './Title.css';
import { withRouter } from 'react-router-dom'

class Title extends React.Component{
  state = {}
  
  handleClick = () =>{
    this.props.history.push(`/`)
  }

  render(){
    return (
      <div className="Title" onClick={this.handleClick} >
        <h1>Jason Melton</h1> 

      </div>
    );
  }
}

export default withRouter(Title);

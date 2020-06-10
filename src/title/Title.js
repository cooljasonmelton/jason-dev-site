import React from 'react';
import './Title.css';
import { withRouter } from 'react-router-dom'

class Title extends React.Component{
  state = {}
  
  handleClick = () =>{
    this.props.history.push(`/`)
    window.location.reload()
  }

  render(){
    return (
      <div className="Title" onClick={this.handleClick} >
        <div><u className='underline'>Jason</u> <u className='underline'>Melton</u></div> 
      </div>
    );
  }
}

export default withRouter(Title);

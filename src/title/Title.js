import React from 'react';
import './Title.css';
import { withRouter } from 'react-router-dom'

class Title extends React.Component{
  state = {}
  
  handleClick = () =>{
    this.props.history.push(`/projects`)
    window.location.reload()
  }

  render(){
    return (
      <div className="Title" onClick={this.handleClick} >
        <div><u className='underline'>jason</u> <u className='underline'>melton</u></div> 
      </div>
    );
  }
}

export default withRouter(Title);

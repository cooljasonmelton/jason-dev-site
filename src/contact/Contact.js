import React from 'react'
import '../landing/Landing.css'
import './Contact.css'
import copyPic from '../images/copy.svg'




class Contact extends React.Component {
  constructor(){
    super()
    this.state={
      copied: false
    }
  }

  handleClick = (e) => {
    switch(e.target.textContent){
      case 'jason.melton2@gmail.com':
        window.location.href = 'mailto:jason.melton2@gmail.com'
        break
      case 'github.com/cooljasonmelton':
        window.location.href = 'http://www.github.com/cooljasonmelton'
        break
      case '@captainjmelton':
        window.location.href = 'https://twitter.com/CaptainJMelton'     
        break
      default: 
        console.log('default')
    }
  }
  
  handleCopy = e => {
    navigator.clipboard.writeText('jason.melton2@gmail.com')
    this.setState(prevState => ({ copied: !prevState.copied }));
  }



  render(){
  return (
    <section className="spikes">
      <div className="main-div">
        <h1 className="title">Contact:</h1>
        <div className="all-contacts">
          <div className="contact-div">
            <div className="copy-div">
              <h2 className="contact-subtitle"><u>email:</u></h2>
              <img src={copyPic} onClick={this.handleCopy} className="copyPic"/>
            </div>
            <h3 className="contact-info" onClick={this.handleClick}>jason.melton2@gmail.com</h3>
            <p className={this.state.copied? "copy-message" : "display-off"}>copied to clipboard!</p>
          </div>
          <div className="contact-div">
            <h2 className="contact-subtitle"><u>github:</u></h2>
            <h3 className="contact-info" onClick={this.handleClick}>github.com/cooljasonmelton</h3>
          </div>
          <div className="contact-div">
            <h2 className="contact-subtitle"><u>twitter:</u></h2>
            <h3 className="contact-info" onClick={this.handleClick}>@captainjmelton</h3>
          </div>
        </div>
      </div>
      

      </section>
      
    )
  }
}

export default Contact
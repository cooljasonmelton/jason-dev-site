import React from 'react'
import '../landing/Landing.css'
import './Contact.css'
import jasonpic from '../images/jasonpic.jpg'

const handleClick = (e, props) => {
  console.log(props)
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


const Contact = () => {
  return (
    <section className="spikes">
      <div className='main-div'>
        <div className="text-div">
          <h1 className="title">Contact:</h1>
          <h3 className="subtitle">email:</h3>
          <h3 className="contact-info">
            <u onClick={handleClick}>jason.melton2@gmail.com</u>
          </h3>
          <h3 className="subtitle">github:</h3>
          <h3 className="contact-info">
            <u onClick={handleClick}>github.com/cooljasonmelton</u>
          </h3>
          <h3 className="subtitle">twitter:</h3>
          <h3 className="contact-info">              
            <u onClick={handleClick}>@captainjmelton</u>
          </h3>
        </div>
        <div>
          <img className="pic" src={jasonpic} />
        </div>
      </div>

    </section>
  )
}

export default Contact
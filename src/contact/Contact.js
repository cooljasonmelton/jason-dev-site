import React from 'react'
import '../landing/Landing.css'
import './Contact.css'
import jasonpic from '../images/jasonpicstage.png'
import ContactForm from './ContactForm'


const Contact = () => {
  return (
    <section className="spikes">
      <div className='landing'>
        <div className="landing-text">
          <h1 className="landing-title">Contact</h1>
          <ContactForm/>  
          <h3 className="contact-info">also, email is great:</h3>
          <h3 className="contact-info">email: <u>jason.melton2@gmail.com</u></h3>
        </div>
        <div>
          <img className="jasonpic" src={jasonpic} />
        </div>
      </div>

    </section>
  )
}

export default Contact
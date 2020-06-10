import React from 'react'
import './Landing.css'
import jasonpic from '../images/jasonpic.jpg'

const Landing = () => {
  return (
    <section className="spikes">
      <div className='landing'>
        <div className="landing-text">
          <h1 className="landing-title">What's up, I'm Jason Melton.</h1>
          <h3 className="landing-subtitle">I'm a software developer from Chicago, IL. I can make websites. Want me to?</h3>
        </div>
        <div>
          <img className="jasonpic" src={jasonpic} />

        </div>
      </div>
       
    </section>
  )
}

export default Landing
import React from 'react'
import './Landing.css'
import jasonpic from '../images/jasonpicstage.png'

const Landing = () => {
  return (
    <section className="spikes">
      <div className='main-div'>
        <div className="text-div">
          <h1 className="title">What's up, I'm Jason Melton.</h1>
          <h3 className="subtitle">I'm a software developer from Chicago, IL. I can make websites. Want me to make you one?</h3>
        </div>
        <div>
          <img className="pic" src={jasonpic} alt='pic of jason' />
        </div>
      </div>
       
    </section>
  )
}

export default Landing
import React from 'react'
import './About.css'
import '../landing/Landing.css'
import jasonpic from '../images/jasonpic.jpg'

const About = () => {
  return (
    <section className="spikes">
      <div className="main-div">
        <img src={jasonpic} className="pic"/>
        <div className="text-div">
          <h1 className="title">About:</h1>
          <div className="text-container">
            <p className="about-text">
              <b>Languages:</b> 
              <p>Javascript (React), Ruby on Rails.</p>
            </p>
            <p className="about-text">
              <b>Bio:</b> 
              <p>With a background in philosophy and comedy, I've noticed software developing has a similar underpinning. Whether analyzing a theorem, writing a joke, or creating an app, it's all about-text looking at logical consequences, research, and error correction.</p>
            </p>
            <p className="about-text">
              Coding is a recent upgrade to my life. I watched a friend switch to development and just how happy it made her. She suggested I try the same and I spent a year diligently studying JavaScript between shifts at a regular job. I immediately loved the creative and analytical nature of it so I took the plunge and fully committed. I entered and completed an intensive bootcamp at Flatiron School, and have now entered the job search confident in my hard-earned skills. 
            </p>
            <p className="about-text">
              I have an obsessive personality and enjoy tinkering with something until it's perfect. I love the creative, problem-solving nature of developing. I look forward to putting new stuff into the world.
            </p>
            <p className="about-text">
              For fun, I enjoy chess and pro-wrestling.
            </p>
            <p className="about-text">
              Founder of Root Beer Friday. #rootbeerfriday
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
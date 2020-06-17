import React from 'react'
import './Projects.css'
import '../landing/Landing.css'
import paperclips from '../images/projects-images/paperclips.png'
import flatnote from '../images/projects-images/flatnote.png'
import thissite from '../images/projects-images/thissite.png'
import thisorthat from '../images/projects-images/thisorthat.png'
import wrestler from '../images/projects-images/wrestler.png'

const Projects = () => {
  return (
    <section className="spikes">
      <div className="main-div project-div">
        <div className="title-container">
          <h1 className="title">Projects:</h1>
        </div>
        <a className="project-item" href="">
          <img className="project-pic" src={paperclips} />
        </a>
        <a className="project-item" href="">
          <img className="project-pic" src={flatnote} />
        </a>        
        <a className="project-item" href="">
          <img className="project-pic" src={thisorthat} />
        </a>        
        <a className="project-item" href="">
          <img className="project-pic" src={wrestler} />
        </a>        
        <a className="project-item" href="">
          <img className="project-pic" src={thissite} />
        </a>
      </div>
    </section>
  )
}

export default Projects
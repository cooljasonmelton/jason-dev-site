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
          <h3 className="visit-blog">visit profile on github.com</h3>
        </div>
        <a className="a-link" href="https://github.com/cooljasonmelton/paperclips-front-end">
          <div className="pic-container">
            <img className="project-pic" src={paperclips} />
              <div className="overlay">
                <p className="pic-text"> <b>PAPERCLIPS</b><br/>
                A JavaScript React / Ruby on Rails journaling application that allows users to track word counts, writing analytics, and awards cute animal pics and videos for hitting goals.</p>
              </div>
          </div>
        </a>
        <a className="a-link" href="https://github.com/cooljasonmelton/flat-note-front-end">
          <div className="pic-container">
            <img className="project-pic" src={flatnote} />
              <div className="overlay">
                <p className="pic-text"> <b>FLAT NOTE</b><br/>
                  A JavaScript React note-taking application that allows users to create, read, update, and destroy notes.
                </p>
              </div>
          </div>
        </a>
        <a className="a-link" href="https://github.com/cooljasonmelton/mod-2-project-thats-my-favorite-wrestler">
          <div className="pic-container">
            <img className="project-pic" src={wrestler} />
              <div className="overlay">
                <p className="pic-text"> <b>THAT'S MY FAVORITE WRESTLER</b><br/>
                   A Ruby on Rails social media application for celebrating pro-wrestling, allowing users to rate and comment on their favorite wrestlers and moves. 
                </p>             
              </div>
          </div>
        </a>
        <a className="a-link" href="https://github.com/deber116/deber116-voting-app">
          <div className="pic-container">
            <img className="project-pic" src={paperclips} />
              <div className="overlay">
                <p className="pic-text"> <b>THIS OR THAT</b><br/>
                  A Javascript polling application that allows users to create two-option polls and vote on their created polls and the polls of other users.
                </p>
              </div>
          </div>
        </a>
        <a className="a-link" href="https://github.com/cooljasonmelton/jason-dev-site">
          <div className="pic-container">
            <img className="project-pic" src={thissite} />
              <div className="overlay">
                <p className="pic-text"> <b>DEV PORTFOLIO OF JASON MELTON</b><br/>
                  Simple portfolio website of software developer, Jason Melton. Information for his projects, about, contact, and blog.
                </p>
              </div>
          </div>
        </a>

      </div>
    </section>
  )
}

export default Projects
import React from 'react'
import './Blog.css'
import '../landing/Landing.css'
import blog1 from '../images/blog-images/blog1.png'
import blog2 from '../images/blog-images/blog2.png'
import blog3 from '../images/blog-images/blog3.png'

const Blog = () => {
  return (
    <section className="spikes">
      <div className="main-blog-div">
        <div className="title-container">
          <h1 className="title">Blog:</h1>
          <h3 className="visit-blog">check out blog on medium.com</h3>
        </div>
        <a className="blog-item" href="https://medium.com/@jasonmelton_/using-chart-js-to-create-tug-o-war-like-graphs-cb18324ec1a?source=friends_link&sk=15f23826c93f746175b4ad372191cb1d">
          <img className="blog-pic" src={blog3} alt='blog'/>
        </a>
        <a className="blog-item" href="https://medium.com/@jasonmelton_/i-figured-out-a-way-to-make-ruby-command-line-flip-books-and-i-did-this-by-learning-from-everyone-afe085635ff2?source=friends_link&sk=413ca43c4ecd2fa1c027f1e31e238dfb">
          <img className="blog-pic" src={blog2} alt='blog'/>
        </a>
        <a className="blog-item"href="https://medium.com/@jasonmelton_/using-rubys-succ-method-to-get-around-api-restrictions-1cdb47829d62?source=friends_link&sk=96b39694a8be7ab9be183416aaf9688d">
          <img className="blog-pic" src={blog1} alt='blog'/>
        </a>
      </div>
    </section>
  )
}

export default Blog
import React from 'react';

const About = React.createClass({
  render: function () {
    return (
      <section className="about-container">
        <h2 className="about-title">About</h2>
        <p className="about-description">
        Hi! I'm Amanda Thorne, a front end developer currently residing in Austin, Texas.
        </p>
        <ul className="about-holder">
          <li className="about-item">
            <h3>Who Am I</h3>
            <p>I was born in Pennsylvania and moved to Austin four years ago in pursuit of better weather. I'm a recent graduate from The Iron Yard 12 week immersive program. I'm a lover of movies, cats, and sand between my toes.</p>
          </li>
          <li className="about-item">
            <h3>Where I've been</h3>
            <p>My background is in education. I spent eight years as a middle school teacher before deciding to change my career. I attended graduate school at Columbia University, where I earned a Master of Arts degree in Literacy.</p>
          </li>
          <li className="about-item">
            <h3>What I Hope To Do</h3>
            <p>My ultimate goal is to work and design education software that helps improve the lives of our youth.</p>
          </li>
        </ul>
        <div className="button-holder">
          <button>View My Resume <i className="fa fa-angle-double-right"></i></button>
        </div>
      </section>
    )
  }
})

export default About

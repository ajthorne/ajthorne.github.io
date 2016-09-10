import React from 'react';

const About = React.createClass({
  getInitialState: function () {
    return {showModal: false}
  },

  resumeHandler: function () {
    this.setState({showModal: !this.state.showModal})
  },

  render: function () {
    let modal;
    if (this.state.showModal) {
      modal = (
      <div className="pdf-modal-container">
        <div className="pdf-modal">
        <button><i className="fa fa-remove" onClick={this.resumeHandler}></i></button>
          <object width="100%" height="100%" type="application/pdf" data="../../assets/AThorne-Resume.pdf?#zoom=85&scrollbar=0&toolbar=0&navpanes=0" id="pdf_content">
          </object>
        </div>
      </div>
      )
    }

    return (
      <section className="about-container">
        <h2 className="about-title">About</h2>
        <p className="about-description">
        Hi! I'm Amanda Thorne, a front end developer currently residing in Austin, Texas.
        </p>
        <ul className="about-holder">
          <li className="about-item">
            <p>I was born in Pennsylvania and moved to Austin four years ago in pursuit of better weather. I'm a recent graduate from The Iron Yard 12 week immersive program where I learn to code in HTML, CSS, JavaScript, along with various frameworks such as React.js, Backbone.js, jQuery, and more. I'm a lover of movies, cats, and sand between my toes.</p>
          </li>
          <li className="about-item">
            <h3>Where I've been</h3>
            <p>My background is in education. I spent eight years as a middle school teacher before deciding to change my career. I attended graduate school at Columbia University, where I earned a Master of Arts degree in Literacy. I made the decision to switch careers to web development because I wanted to return to my roots of creativity and building useful resources and tools. Currently, I'm enamored with building whatever I can in JavaScript and exploring various frameworks.</p>
          </li>
          <li className="about-item">
            <h3>What I Hope To Do</h3>
            <p>I'm seeking a full time Front End Development role currently. My ultimate goal is to work and design education software that helps improve the lives of our youth.</p>
          </li>
        </ul>
        <div className="button-holder">
          <button onClick={this.resumeHandler}>View My Resumé <i className="fa fa-angle-double-right"></i></button>
        </div>
        {modal}
      </section>
    )
  }
})

export default About

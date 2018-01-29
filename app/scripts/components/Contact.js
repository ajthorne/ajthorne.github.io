import React from 'react';
import Scroll from 'react-scroll';


const Contact = React.createClass({
  render: function () {
    let Element = Scroll.Element;

    return (
      <section className="contact-container">
        <Element name="Contact"/>
        <h2 className="contact-title">Contact</h2>
        <ul className="contact-holder">
          <li>
          <a target="_blank" href="https://github.com/ajthorne"><i className="fa fa-github"></i></a>
          <h3 className="contact-icon-title">GitHub</h3>
          <p className="contact-icon-copy">Check out all that I've been building lately.</p>
          </li>
          <li><a target="_blank" href="https://www.linkedin.com/in/amanda-thorne"><i className="fa fa-linkedin-square"></i></a>
          <h3 className="contact-icon-title">LinkedIn</h3>
          <p className="contact-icon-copy">Connect with me to learn more about my professional experience.</p>
          </li>
          <li><a href="mailto: manda.thorne@gmail.com"><i className="fa fa-envelope"></i></a>
          <h3 className="contact-icon-title">Email</h3>
          <p className="contact-icon-copy">Contact me with any questions, comments, and/or ideas!</p>
          </li>
        </ul>
      </section>
    )
  }
})

export default Contact;

// <li><a target="_blank" href="https://fromteachingtocoding.wordpress.com/"><i className="fa fa-wordpress"></i></a>
// <h3 className="contact-icon-title">WordPress</h3>
// <p className="contact-icon-copy">Check out my blog to see what I've been writing about and my thoughts on coding.</p>
// </li>

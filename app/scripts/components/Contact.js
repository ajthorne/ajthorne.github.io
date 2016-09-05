import React from 'react';

const Contact = React.createClass({
  render: function () {
    return (
      <section className="contact-container">
        <h2 className="section-title">Contact</h2>
        <ul className="contact-icons-holder">
          <li><a href="https://github.com/ajthorne"><i className="fa fa-github"></i></a></li>
          <li><a href="www.linkedin.com/in/amanda-thorne"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href="https://fromteachingtocoding.wordpress.com/"><i className="fa fa-wordpress"></i></a></li>
          <li><a href="mailto: manda.thorne@gmail.com"><i className="fa fa-envelope"></i></a></li>
        </ul>
      </section>
    )
  }
})

export default Contact;

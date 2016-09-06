import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <h2 className="logo-header">AT</h2>
        <ul className="contact-icons">
          <li><a target="_blank" href="https://github.com/ajthorne"><i className="fa fa-github"></i></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/amanda-thorne"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a target="_blank" href="https://fromteachingtocoding.wordpress.com/"><i className="fa fa-wordpress"></i></a></li>
          <li><a href="mailto: manda.thorne@gmail.com"><i className="fa fa-envelope"></i></a></li>
        </ul>
      </nav>
    )
  }
})

export default Nav;

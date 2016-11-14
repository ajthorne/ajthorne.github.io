import React from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <div className="logo-header">
          <p className="logo-name">Amanda Thorne</p>
          <p className="logo-title">Front-End Developer</p>
        </div>
        <ul className="nav-links">
          <li><Link to="About" smooth={true} duration={500} offset={-350}>About</Link></li>
          <li><Link to="Work" smooth={true} duration={500} offset={-100}>Work</Link></li>
          <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
          <li></li>
        </ul>
      </nav>
    )
  }
})

export default Nav;

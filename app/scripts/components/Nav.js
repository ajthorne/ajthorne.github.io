import React from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <ul className="nav-links">
          <li><Link to="About" smooth={true} duration={500} offset={-100}>About</Link></li>
          <li><Link to="Work" smooth={true} duration={500} offset={-65}>Work</Link></li>
          <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
          <li></li>
        </ul>
      </nav>
    )
  }
})

export default Nav;

import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    )
  }
})

export default Nav;

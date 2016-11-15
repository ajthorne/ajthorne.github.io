import React from 'react';

const Hero = React.createClass({
  render: function () {
    return (
      <div className="hero">
        <div className="hero-copy">
          <p className="hero-name">Amanda Thorne</p>
          <p className="hero-title">Front-End Developer</p>
        </div>
      </div>
    )
  }
})

export default Hero;

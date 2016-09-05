import React from 'react';
import {Link} from 'react-router';

const Work = React.createClass({
  render: function () {
    return (
      <section className="work-container">
        <h2 className="work-title">Work</h2>
        <ul className="work-holder">
          <li className="work-item">
            <img src="../../assets/booknook.png"/>
            <p className="work-copy">Description goes here</p>
          </li>
          <li className="work-item">
            <img src="../../assets/reactpardy.png"/>
            <p className="work-copy">Description goes here</p>
          </li>
          <li className="work-item">
            <img src="../../assets/bringtheband.png"/>
            <p className="work-copy">Description goes here</p>
          </li>
        </ul>
      </section>
    )
  }
})

export default Work;

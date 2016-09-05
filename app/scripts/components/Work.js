import React from 'react';
import {Link} from 'react-router';

const Work = React.createClass({
  render: function () {
    return (
      <section className="work-container">
        <h2 className="work-title">Work</h2>
        <ul className="work-holder">
          <li className="work-item">
            <a href="http://booknook.surge.sh/"><img src="../../assets/booknook.png"/></a>
            <p className="work-copy">
            <span>Book Nook </span>
            An app to support building a literacy community among adolescents. Find new friends, new books to read, and explore an awesome new social media! This was my final project for The Iron Yard and was built using React.js, Node.js, Backbone.js, SASS, HTML5, JavaScript, Kinvey, and Google Books API.
            View code on GitHub <a target="_blank" className="gh-work-link" href="https://github.com/ajthorne/book-nook">here</a>.
            </p>
          </li>
          <li className="work-item">
            <a href="http://ajthorne-reactpardy.surge.sh/"><img src="../../assets/reactpardy.png"/></a>
            <p className="work-copy">
            <span>React-Pardy!</span>
            A Jeopardy clone app. This was built using React.js, Node.js, Backbone.js, SASS, HTML5, JavaScript, and Kinvey.
            View code on GitHub <a target="_blank" className="gh-work-link2" href="https://github.com/ajthorne/reactopardy">here</a>.</p>
          </li>
          <li className="work-item">
            <img src="../../assets/bringtheband.png"/>
            <p className="work-copy">
            <span>Bring the Band</span>
            A search and voting app built to manipulate data rendered from Spotify's API. This was built using React.js, Node.js, Backbone.js, SASS, HTML5, JavaScript, and Kinvey.
            View code on GitHub <a target="_blank" className="gh-work-link3" href="https://github.com/ajthorne/bring-the-band">here</a>.
            </p>
          </li>
        </ul>
      </section>
    )
  }
})

export default Work;

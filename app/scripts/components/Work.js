import React from 'react';
import Scroll from 'react-scroll';

const Work = React.createClass({
  render: function () {
    let Element = Scroll.Element;
    return (
      <section className="work-container">
        <Element name="Work"/>
        <section className="featured-work">
          <h2 className="work-title">Featured Work</h2>
          <li className="work-item">
          <div className="featured-hover">
              <a className="featured-link" target="_blank" href="http://booknook.surge.sh/">
              <span className="featured-name">Book Nook</span>
              </a>
            </div>
            <p className="work-copy">
            An app to support building a literacy community among adolescents. Find new friends, new books to read, and explore an awesome new social media! This was my final project for The Iron Yard and was built using React.js, Node.js, Backbone.js, SASS, HTML5, JavaScript, Kinvey, a back-end service, and Google Books API. This is built for all screen sizes and devices. Build time was 3 weeks.
            View code on GitHub <a target="_blank" className="gh-work-link" href="https://github.com/ajthorne/book-nook">here</a>.
            </p>
          </li>

        </section>
        <h2 className="work-title">Other Projects</h2>
        <ul className="work-holder">
          <li className="work-item">
            <div className="hoveritem">
              <a target="_blank" href="http://ajthorne-reactpardy.surge.sh/">
              <span>React-Pardy! Live Site</span>
              <img src="../../assets/reactpardy.png"/></a>
            </div>
            <p className="work-copy">
            <span>React-Pardy!</span>
            A Jeopardy clone app. This was my first major project working with React.js. It was built with React.js, Node.js, Backbone.js, SASS, HTML5, JavaScript, and Kinvey, a back-end service. This is designed responsively. Build time was 5 days.
            View code on GitHub <a target="_blank" className="gh-work-link" href="https://github.com/ajthorne/reactopardy">here</a>.</p>
          </li>
          <li className="work-item">
            <div className="hoveritem">
              <a target="_blank" href="http://ajthorne-bringtheband.surge.sh/">
              <span>Bring the Band Live Site</span>
              <img src="../../assets/bringtheband.png"/></a>
            </div>
              <p className="work-copy">
              <span>Bring the Band</span>
              A search and voting app built to manipulate data rendered from Spotify's API. This was built using React.js, Node.js, Backbone.js, SASS, HTML5, JavaScript, and Kinvey, a back-end service. This is designed responsively. Build time was 1 week.
              View code on GitHub <a target="_blank" className="gh-work-link" href="https://github.com/ajthorne/bring-the-band">here</a>.
              </p>
          </li>
        </ul>
      </section>
    )
  }
})

export default Work;

//for future...
// <span className="hidden-link">Live Site</span>

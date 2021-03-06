import React from 'react';
import Nav from './Nav';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';


const App = React.createClass({
  render: function () {
    return (
      <div className="main-contents">
        <Nav/>
        <Hero/>
        <About/>
        <Work />
        <Contact/>
        <Footer />
      </div>
    )
  }
})

export default App;

// <Nav/>
// {this.props.children}

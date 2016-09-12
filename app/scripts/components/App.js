import React from 'react';
import Nav from './Nav';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';


const App = React.createClass({
  render: function () {
    return (
      <div className="main-contents">
        <Nav/>
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

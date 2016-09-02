import React from 'react';
import Nav from './Nav';
import Work from './Work';
import About from './About';


const App = React.createClass({
  render: function () {
    return (
      <div className="main-contents">
        <Nav/>
        <Work />
        <About/>
      </div>
    )
  }
})

export default App;

// <Nav/>
// {this.props.children}

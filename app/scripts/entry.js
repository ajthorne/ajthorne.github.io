import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, IndexRoute, Router, Route} from 'react-router';
import App from './components/App';
import Work from './components/Work';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'));

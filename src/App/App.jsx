import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './normalize.css';

import AppContainer from '../Views/AppContainer';
import Home from '../Views/Home';
import NotFound from '../Views/NotFound';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={Home} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;

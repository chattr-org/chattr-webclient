import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './normalize.css';

import AppContainer from '../Views/AppContainer';
import Home from '../Views/Home';
import NotFound from '../Views/NotFound';
// import Mobile from '../Views/Mobile';

// var MobileDetect = require('mobile-detect');

class App extends Component {
  render() {
    // const md = new MobileDetect();
    // if (md.mobile() === null) {
      return (
        <Router history={browserHistory}>
          <Route path='/' component={AppContainer}>
            <IndexRoute component={Home} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      );
    // } else {
    //   return (
    //     <Mobile />
    //   );
    // }
  }
}

export default App;

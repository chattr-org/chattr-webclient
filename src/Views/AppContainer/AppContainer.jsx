import React, { Component } from 'react';
import Appbar from '../Appbar';

class AppContainer extends Component {
  render() {
    return (
      <div className='container'>
        <Appbar />
        <div className='body'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppContainer;

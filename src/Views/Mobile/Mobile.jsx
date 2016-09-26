import React, { Component } from 'react';
import './Mobile.scss';
import { Message } from 'stardust';

class Mobile extends Component {
  render() {
    return (
      <Message>
        <Message.Header>Browser Unsupported</Message.Header>
        <p>Mobile browsers are currently not supported by the Chattr Web Client.</p>
      </Message>
    );
  }
}

export default Mobile;

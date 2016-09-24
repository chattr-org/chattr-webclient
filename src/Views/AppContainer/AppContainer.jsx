import React, { Component } from 'react';
import Header from '../Header';
import { Container } from 'stardust';

class AppContainer extends Component {
  render() {
    return (
      <div className='container'>
        <Header>Header</Header>
        <div className='body'>
          <Container>
            {this.props.children}
          </Container>
        </div>
      </div>
    )
  }
}

export default AppContainer;

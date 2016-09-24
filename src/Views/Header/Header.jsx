import React, { Component } from 'react';
import { Menu } from 'stardust';

class Header extends Component {
  state = {};

  handleItemClick = (event, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu stackable fixed='top' size='large'>
        <Menu.Item
          name='test1'
          active={activeItem === 'test1'}
          onClick={this.handleItemClick}
        >
          test1
        </Menu.Item>
        <Menu.Item
          name='test2'
          active={activeItem === 'test2'}
          onClick={this.handleItemClick}
        >
          test2
        </Menu.Item>
        <Menu.Item
          name='test3'
          active={activeItem === 'test3'}
          onClick={this.handleItemClick}
        >
          test3
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
          >
            Sign Up
          </Menu.Item>
          <Menu.Item
            name='login'
          >
            Log In
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;

import React, { Component } from 'react';
import logo from ''./logo.svg';'
import ironhackLogo from './images/ironhack-logo.svg';
import menu from './menu-top.svg';

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img className="navimg" src={ironhackLogo} />
        <img className="navimg" src={menu} />
      </div>
    );
  }
}

export default Nav;

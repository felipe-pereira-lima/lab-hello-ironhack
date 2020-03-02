import React, { Component } from 'react';
/* importar os componentes abaixo */
import Navbar from './components/Navbar';
import Main from './components/Main';
import Info from './components/Info';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Info />
      </div>
    );
  }
}

export default App;

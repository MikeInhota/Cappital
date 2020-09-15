import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="App">
          
        <p className="App-intro">
          <Link to="/">Ir para a página Inicial </Link>
          Main!
        </p>
      </div>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class E404 extends Component {
  render() {
    return (
      <div className="App">
          
        <p className="App-intro">
          <Link to="/">Ir para a página Inicial </Link>
          E404!
        </p>
      </div>
    );
  }
}

export default E404;
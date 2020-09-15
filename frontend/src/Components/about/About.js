import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Link to="/">Ir para a página inicial!</Link>
          Sobre.!!!!!!!!!!!!!!!!
        </p>
        <p>Aqui vai uma série de cards com as nossas caras de bolacha e links pros nossos Github e Linkedin.</p>
        <p>Acho que fica maneiro *-*</p>
      </div>
    );
  }
}

export default Sobre;
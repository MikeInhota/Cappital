import React, { Component } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="App">

        <div className="container-fluid">
          <div className="row">

            <div className="side-bar col-md-1">
              <span class="material-icons">payments</span>
              <hr/>

            </div>

            <div className="main col-md">

              <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar ..." aria-label="Pesquisar"></input>
                  <button className="btn my-2 my-sm-0" type="submit">Pesquisar</button>
                </form>
                <a className="navbar-brand"><span class="material-icons">account_circle</span></a>
              </nav>

              <div className="card bg-dark text-white main-card">
                <div className="card-img-overlay">
                  <div className="row">
                    <div className="bem-vindo col-sm">
                      <h5 className="card-title">Bem vindo, NomeLogado</h5>
                      <p className="card-text">De boa na lagoa?</p>
                    </div>
                    <div className="widgets col-sm">
                      <p className="card-text">Icones de hora e blablabla!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container cartoes">

                <div className="col-xl-2 col-md-4 mb-3">
                  <div className="card shadow h-100">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center meio-card">
                        <div className="col-md-3">
                          <span className="material-icons">account_balance_wallet</span>
                        </div>
                        <div className="col-md mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1">Seu saldo:</div>
                          <div className="h5 mb-0 font-weight-bold">R$40.000,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sunt alias quis perspiciatis necessitatibus modi sit beatae doloribus, facere provident atque cum, perferendis odit dicta vitae quos voluptatibus ea voluptatum.</p>
              <p className="App-intro"><Link to="/">Ir para a página Login </Link>Main!</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Main;
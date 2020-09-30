import React, { Component } from "react";
import "./Main.css";

class MainCard extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default MainCard;

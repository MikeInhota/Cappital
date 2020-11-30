import React, { Component } from "react";
import "./Main.css";

class MainCard extends Component {
  render() {
    return (
      <div>
        <div className="card bg-dark text-white main-card">
          <div className="card-img-overlay">
            <div className="row">
              <div className="bem-vindo col-sm">
                <h5 className="card-title">Bem vindo, Victor</h5>
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default MainCard;

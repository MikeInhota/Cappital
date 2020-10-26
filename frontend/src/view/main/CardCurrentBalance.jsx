import React, { Component } from "react";
import "./Main.css";
import saldo from "../../Components/Saldo/saldo"

class CardCurrentBalance extends Component {
  render() {
    return (
      <>
        <div className="container cartoes pl-0">
          <div className="col-xl-3 col-md-3 mb-0 pl-0">
            <div className="card shadow h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center meio-card">
                  <div className="col-md-1">
                  </div>
                  <div className="col-md mr-1">
                    <div className="text-xs font-weight-bold text-uppercase text-center mb-0">
                      <saldo>Seu saldo: R$ 7,50</saldo>
                    </div>
                    <saldo></saldo>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardCurrentBalance;

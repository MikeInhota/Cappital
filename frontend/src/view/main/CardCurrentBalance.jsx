import React, { Component } from "react";
import "./Main.css";
import saldo from "../../Components/Saldo/saldo"

class CardCurrentBalance extends Component {
  render() {
    return (
      <>
        <div className="container cartoes">
          <div className="col-xl-6 col-md-4 mb-3">
            <div className="card shadow h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center meio-card">
                  <div className="col-md-3">
                    <span className="material-icons">
                      account_balance_wallet
                    </span>
                  </div>
                  <div className="col-md mr-1">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Seu saldo:359999999999
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

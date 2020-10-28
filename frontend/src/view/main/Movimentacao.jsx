import React, {Component} from 'react';
import "./Main.css";

const numbers = [1, 2, 3, 4, 5];


class GraficCard extends Component {
  render() {
    return (
      <>
        <div className="container cartoes">
          <div className="col-xl-10 col-md-9 mb-2 ">
            <div className="card shadow h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center meio-card">
                  <div className="col-md mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      <p>teste</p>
                    </div>
                    <div className="h5 mb-0 font-weight-bold">Movimentações</div>
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

export default GraficCard;

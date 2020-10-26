import React, {Component} from 'react';
import "./Main.css";

class ObjectiveCard extends Component {
  render() {
    return (
      <>
        <div className="container cartoes">
          <div className="col-xl-5 col-md-10 mb-5">
            <div className="card shadow h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center meio-card">
                  <div className="col-md-3">
                    <span className="material-icons">
                        trending_up
                    </span>
                  </div>
                  <div className="col-md mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Teste de conteudo
                    </div>
                    <div className="h5 mb-0 font-weight-bold">Qualquer informação.</div>
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

export default ObjectiveCard;

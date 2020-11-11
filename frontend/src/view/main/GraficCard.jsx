import React, {Component} from 'react';
import "./Main.css";
import GraficData from "../../Components/GraficData/GraficData"


class GraficCard extends Component {
  render() {
    return (
      <>
        <div className="container cartoes">
          <div className="col-xl-7 col-md-9 mb-2 ">
            <div className="card shadow h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center meio-card">
                  <div className="col-md-3">
                  </div>
                  <div className="col-md mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      <GraficData data={GraficData.data}/>
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
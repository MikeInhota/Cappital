import React, {Component} from 'react';
import Label from "../../Components/Label/label"
import "./Main.css";
            
const numbers = [1, 2, 3, 4, 5];

                   
const valoresTeste = [
  ['Ração', 22,50],
  ['Conta Agua', 100],
  ['Internet', 80],
  ['Gasolina', 50],
]

class GraficCard extends Component {
  render() {
    return (
      <>
      <div className="boxMovimentacao">
            <div className="card shadow h-100">
              <div className="card-body">
                  <div className="col-md mr-3">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      <label>Movimentação</label>
                    </div>
                        <div className="h5 mb-0 font-weight-bold">{<ul>{ valoresTeste.map(teste => <li>{ teste }</li>) }</ul>}</div>
                  </div>
              </div>
          </div>
          </div>
      </>
    );
  }
}

export default GraficCard;

import React, {Component} from 'react';
import "./Main.css";



const valoresTeste = [
['Ração     ', ' 22,50'],
['Conta Água', ' 100'],
['Internet'  , ' 80'],
['Gasolina'  , ' 50'],
]

class GraficCard extends Component {
render() {
return (
<>
  <div className="boxMovimentacao">
    <div className="card shadow-none h-100 rounded-0">
      <div className="card-body">
        <div className="text-xs font-weight-bold text-uppercase mb-1">
          <label>Movimentação</label>
        </div>
        <div id="valoresMovimentacoes">
          {<li>
            {valoresTeste.map((teste) => <li>{teste}</li>) }
          </li>}
        </div>
      </div>
    </div>
  </div>
</>
);
}
}

export default GraficCard;
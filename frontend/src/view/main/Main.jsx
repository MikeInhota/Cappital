import React from "react";
import "./Main.css";
import Navbar from "./NavBar";
import MainCard from "./MainCard";
import CardCurrentBalance from "./CardCurrentBalance";
import ModalBalance from "./ModalBalance";
import GraficData from "../../Components/GraficData/GraficData";
import Movimentacao from "./Movimentacao";
import CaixaQualquer from "../../Components/GraficData/caixaQualquer";

const Main = (props) => {
const [modalShow, setModalShow] = React.useState(false);

return (
<div className="App">
  <div className="container-fluid">
    <div className="row">
      <div className="container">
        <div className="row">
          <div className="main col-sm">
            <Navbar />
            <MainCard/>
            <div id="caixaValores">
            <a onClick={()=> setModalShow(true)}>
              <CardCurrentBalance />
            </a>
            <ModalBalance show={modalShow} onHide={()=> setModalShow(false)} />
            </div>
            <div id="boxDados">
            <GraficData />
            <Movimentacao />
            <div id="cobrirBuraco">
            <CaixaQualquer />
            
            </div>

            </div>
            <footer id="footer">@Etecia 2020</footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default Main;
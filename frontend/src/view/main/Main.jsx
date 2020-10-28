import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import MainCard from "./MainCard";
import CardCurrentBalance from "./CardCurrentBalance";
import ModalBalance from "./ModalBalance";
import GraficData from "../../Components/GraficData/GraficData";
import Movimentacao from "./Movimentacao";

const Main = (props) => {
const [modalShow, setModalShow] = React.useState(false);

return (
<div className="App">
  <div className="container-fluid">
    <div className="row">
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="main col-sm">
            <Navbar />
            <MainCard/>
            <a onClick={()=> setModalShow(true)}>
              <CardCurrentBalance />
            </a>
            <ModalBalance show={modalShow} onHide={()=> setModalShow(false)} />
              <p className="App-intro">
              <div class="row">
                  <div className="main col-sm">
                    <GraficData />
                    </div>
                    <div className="main col-sm">
                    <Movimentacao />
                    </div>
                  </div>
                <Link to="/">Ir para a página Login !!</Link>
              </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default Main;
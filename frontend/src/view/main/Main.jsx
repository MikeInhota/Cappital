import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import MainCard from "./MainCard";
import CardCurrentBalance from "./CardCurrentBalance";
import ModalBalance from "./ModalBalance";
import ObjetiveCard from "./ObjectiveCard";

const Main = (props) => {
const [modalShow, setModalShow] = React.useState(false);

return (
<div className="App">
  <div className="container-fluid">
    <div className="row">
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="main col-md">
              <Navbar />
              <MainCard />
              <a onClick={()=> setModalShow(true)}>
                <CardCurrentBalance />
              </a>
              <ModalBalance show={modalShow} onHide={()=> setModalShow(false)} />
                <p className="App-intro">
                  <Link to="/">Ir para a página Login !!</Link>
                </p>
          </div>
          <div class="col-sm">
            <div className="main col-md">
              <ObjetiveCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
);
};

export default Main;
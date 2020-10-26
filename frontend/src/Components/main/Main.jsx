import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import MainCard from "./MainCard";
import CardCurrentBalance from "./CardCurrentBalance";
import ModalBalance from "./ModalBalance";

const Main = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <div className="main col-md">
            <Navbar />

            <MainCard />

            <a onClick={() => setModalShow(true)}>
              <CardCurrentBalance />
            </a>
            <ModalBalance show={modalShow} onHide={() => setModalShow(false)} />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              sunt alias quis perspiciatis necessitatibus modi sit beatae
              doloribus, facere provident atque cum, perferendis odit dicta
              vitae quos voluptatibus ea voluptatum.
            </p>
            <p className="App-intro">
              <Link to="/">Ir para a página Login !!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

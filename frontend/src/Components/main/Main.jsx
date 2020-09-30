import React, { Component } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import MainCard from "./MainCard";
import CardContainer from "./CardContainer";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <Sidebar />

            <div className="main col-md">
              <Navbar />

              <MainCard />

              <CardContainer />

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sunt alias quis perspiciatis necessitatibus modi sit
                beatae doloribus, facere provident atque cum, perferendis odit
                dicta vitae quos voluptatibus ea voluptatum.
              </p>
              <p className="App-intro">
                <Link to="/">Ir para a página Login </Link>Main!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

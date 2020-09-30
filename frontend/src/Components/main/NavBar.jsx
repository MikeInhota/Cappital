import React, { Component } from "react";
import "./Main.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Pesquisar ..."
              aria-label="Pesquisar"
            ></input>
            <button className="btn my-2 my-sm-0" type="submit">
              Pesquisar
            </button>
          </form>
          <a className="navbar-brand">
            <span class="material-icons">account_circle</span>
          </a>
        </nav>
      </>
    );
  }
}

export default Navbar;

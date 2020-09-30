import React, { Component } from "react";
import './Main.css';

class Sidebar extends Component {

  render() {
    return (
      <>
        <div className="side-bar col-md-1">
              <span class="material-icons">payments</span>
              <hr></hr>
        </div>
      </>
    );
  }
}

export default Sidebar;
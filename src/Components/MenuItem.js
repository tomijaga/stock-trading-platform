import React, { Component } from "react";
import "./MenuItem.css";
// import LogRocket from "logrocket";
// LogRocket.init("tnpbgq/something");

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  storeSymbol = () => {
    sessionStorage.setItem("stockSymbol", this.props.symbol);
    console.log("stored Symbol:", this.props.symbol);
  };

  actions = () => {
    let action = this.props.action;
    switch (action) {
      case "store":
        return this.storeSymbol();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <span onClick={this.actions}>
        <div className="MenuItem">
          <p className="symbol"> {this.props.symbol}</p>
          <p className="name"> {this.props.name}</p>
        </div>
      </span>
    );
  }
}

export default MenuItem;

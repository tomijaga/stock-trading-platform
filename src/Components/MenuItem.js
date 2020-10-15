import React from "react";
import "./MenuItem.css";
// import LogRocket from "logrocket";
// LogRocket.init("tnpbgq/something");

const MenuItem = (props) => {
  const storeSymbol = () => {
    sessionStorage.setItem("stockSymbol", props.symbol);
    console.log("stored Symbol:", props.symbol);
  };

  const actions = () => {
    let action = props.action;
    switch (action) {
      case "store":
        return storeSymbol();
        break;
      default:
        break;
    }
  };

  return (
    <span onClick={actions}>
      <div className="MenuItem">
        <p className="symbol"> {props.symbol}</p>
        <p className="name"> {props.name}</p>
      </div>
    </span>
  );
};

export default MenuItem;

import React, { Component } from "react";
import "./Scrollbar.css";

const Scrollbar = (props) => {
  return (
    <div className="scroll" style={{ height: props.height }}>
      {props.children}
    </div>
  );
};
export default Scrollbar;

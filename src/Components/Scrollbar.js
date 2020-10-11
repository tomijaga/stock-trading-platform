import React, { Component } from "react";
import "./Scrollbar.css";

export default class Scroll extends Component {
  constructor() {
    super();
    this.scrollStyle = (scrollHeight = "400px") => {
      return {
        overflowY: "auto",
        maxheight: scrollHeight,
      };
    };
  }

  render() {
    return (
      <div className="scroll" style={this.scrollStyle(this.props.height)}>
        {this.props.children}
      </div>
    );
  }
}

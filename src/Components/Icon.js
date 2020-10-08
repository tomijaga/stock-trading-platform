import React, { Component } from "react";

export default class Icon extends Component {
  constructor() {
    super();
    this.size = (h = "50px", w = "50px") => {
      return {
        height: h,
        width: w,
      };
    };
  }

  render() {
    return (
      <div>
        <img
          src={this.props.url}
          alt="Watchlist Logo"
          style={this.size(this.props.height, this.props.width)}
          onMouseEnter={this.props.show}
          onMouseOut={this.props.hide}
        />
      </div>
    );
  }
}

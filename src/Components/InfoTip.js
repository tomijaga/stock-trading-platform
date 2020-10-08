import React, { Component } from "react";
import "./InfoTip.css";

export default class InfoTip extends Component {
  super() {}

  setFlex = (value = "right") => {
    let flex;
    switch (value) {
      case "down":
        flex = "column";
        break;
      case "up":
        flex = "column-reverse";
        break;
      case "right":
        flex = "row";
        break;
      case "left":
        flex = "row-reverse";
        break;
      default:
        break;
    }

    return {
      display: "flex",
      flexDirection: flex,
      alignItems: "center",
    };
  };

  arrowDirection = (value = "right") => {
    let direction;
    switch (value) {
      case "down":
        direction = "arrow-up";
        break;
      case "up":
        direction = "arrow-down";
        break;
      case "right":
        direction = "arrow-left";
        break;
      case "left":
        direction = "arrow-right";
        break;
      default:
        break;
    }

    return direction;
  };

  render() {
    return (
      <div style={{ left: "50px", position: "absolute" }}>
        <div className="onTop" style={this.setFlex(this.props.position)}>
          <div className={this.arrowDirection(this.props.position)} />
          <div className="info">
            <p>{this.props.info}</p>
          </div>
        </div>
      </div>
    );
  }
}

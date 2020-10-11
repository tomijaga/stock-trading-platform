import React, { Component } from "react";
import InfoTip from "./InfoTip";
import Icon from "./Icon";
import Center from "./Center";

class IconWithInfoTip extends Component {
  constructor() {
    super();
    this.state = {
      display: "hidden",
    };
  }

  divStyle = (value) => {
    let flex;
    switch ((value = "right")) {
      case "up":
        flex = "column";
        break;
      case "down":
        flex = "column-reverse";
        break;
      case "left":
        flex = "row";
        break;
      case "right":
        flex = "row-reverse";
        break;
      default:
        break;
    }

    return {
      display: "flex",
      flexDirection: flex,
      alignItems: "center",
      width: "auto",
    };
  };

  onHover = (event) => {
    this.setState({
      display: "visible",
    });
    console.log("!");
    // console.log(this.state);
  };

  displayTooltip = (display) => {
    if (display == "visible") {
      return (
        <InfoTip position={this.props.infoTipPosition} info={this.props.info} />
      );
    }
  };

  onHoverOut = (event) => {
    // if (this.state.selected) {
    this.setState({
      display: "hidden",
    });
    // }

    // console.log(this.state);
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={this.divStyle(this.props.infoTipPosition)}>
          <Icon
            height={this.props.iconHeight}
            width={this.props.iconHeight}
            show={this.onHover}
            hide={this.onHoverOut}
            url={this.props.url}
          />

          {this.displayTooltip(this.state.display)}
        </div>
      </div>
    );
  }
}

export default IconWithInfoTip;

import React, { Component } from "react";
import InfoTip from "./InfoTip";
import Icon from "./Icon";
import Center from "./Center";

class IconWithInfoTip extends Component {
  constructor() {
    super();
    this.state = {
      coverBackground: "none",
      selected: false,
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
    if (!this.state.selected) {
      this.setState({
        coverBackground: "rgba(135, 206, 250, 0.8)",
        selected: true,
      });
    }
    if (display == "visible") {
      return (
        <InfoTip position={this.props.infoTipPosition} info={this.props.info} />
      );
    }
  };

  onHoverOut = (event) => {
    if (this.state.selected) {
      this.setState({
        display: "hidden",
        coverBackground: "none",
        selected: false,
      });
    }

    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <div style={this.divStyle(this.props.infoTipPosition)}>
          <Center style={{ backgroundColor: this.state.coverBackground }}>
            <Icon
              height={this.props.iconHeight}
              width={this.props.iconHeight}
              show={this.onHover}
              hide={this.onHoverOut}
              url={this.props.url}
            />
          </Center>

          {this.displayTooltip(this.state.display)}
        </div>
      </div>
    );
  }
}

export default IconWithInfoTip;

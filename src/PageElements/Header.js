import React, { Component } from "react";
import Icon from "../Components/Icon";
import Search from "../Components/Search";

export default class Header extends Component {
  super() {}

  render() {
    return (
      <div style={{ minHeight: "3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100pt,auto)) ",
            minHeight: "100%",
            padding: " 0px 2rem",
            background: "rgb(10, 30, 40)",
            alignItems: "center",
            width: `calc(100vw-${2 * 2}rem)`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="" alt="Brand Logo" />
            <h2 style={{ margin: "0pt" }}>RoboTrade</h2>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Search style={{ marginLeft: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}

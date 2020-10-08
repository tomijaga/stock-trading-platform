import React, { Component } from "react";
import MenuItem from "./MenuItem";
// import './SearchItems.css';
import Scrollbar from "./Scrollbar";
import { Link } from "react-router-dom";

class SearchItems extends Component {
  super() {}

  displayItems = () => {
    console.log(this.props.values);
    return this.props.values
      .filter((item, i) => {
        return item["4. region"] === "United States";
      })
      .map((item, i) => {
        return (
          <a
            href="/stocks"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <MenuItem
              key={i}
              symbol={item["1. symbol"]}
              name={item["2. name"]}
            ></MenuItem>
          </a>
        );
      });
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "100%",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Scrollbar height={this.props.height} background="red">
          {this.displayItems()}
        </Scrollbar>
      </div>
    );
  }
}

export default SearchItems;

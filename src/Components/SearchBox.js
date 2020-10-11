import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.inputStyle = {
      width: "100%",
      background: "azure",
      height: "1.rem",
      color: "black",
      paddingLeft: "18px",
      borderColor: "transparent",
      borderRadius: "4px",
      marginBottom: "4px",
      fontWeight: "bold",
      top: "0%",
    };
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search Stocks"
          onChange={this.props.search}
          style={this.inputStyle}
        />
      </div>
    );
  }
}

export default SearchBox;

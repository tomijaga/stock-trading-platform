import React from "react";

const SearchBox = (props) => {
  const inputStyle = {
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

  return (
    <div>
      <input
        type="search"
        placeholder="Search Stocks"
        onChange={props.search}
        style={inputStyle}
      />
    </div>
  );
};

export default SearchBox;

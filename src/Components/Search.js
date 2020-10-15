import StockLibrary from "../Classes/StockLibrary";
import React, { useState } from "react";
import SearchItems from "./SearchItems";
import SearchBox from "./SearchBox";
import "./Search.css";
import ErrorBoundary from "./ErrorBoundary";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const setSearch = async function (value) {
    await setSearchValue(value);

    console.log("searchValue", searchValue);
  };

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <SearchBox search={onSearchChange} />
      <SearchItems searchValue={searchValue} height={props.height} />
    </div>
  );
};

export default Search;

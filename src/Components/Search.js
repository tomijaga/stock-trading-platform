import StockLibrary from "../Classes/StockLibrary";
import React, { Component } from "react";
import SearchItems from "./SearchItems";
import SearchBox from "./SearchBox";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      filteredStockSymbols: [],
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  async setSearch(value) {
    await this.setState({
      searchValue: value,
    });
    console.log("searchValue", this.state.searchValue);

    // this.setArrayThrottled();
  }

  onSearchChange(event) {
    this.setSearch(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <SearchBox search={this.onSearchChange} />
        <SearchItems
          searchValue={this.state.searchValue}
          height={this.props.height}
        />
      </div>
    );
  }
}

export default Search;

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
    //  this.setPosition=(topPosition ="10px", rightPosition="14px")=>{
    //   return{
    //      top: topPosition,
    //    right:rightPosition
    //   }
    //  }
  }

  onSearchChange = (event) => {
    console.log(typeof event.target.value);

    this.setState({
      searchValue: event.target.value,
    });

    let regex = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // console.log(this.state.searchValue)
    // console.log(`is ${this.state.searchValue} an alphabet ==> ${alphabet.test(this.state.searchValue)}`);
    // console.log(`\'${this.state.searchValue}\' contains Special char' ==> ${regex.test(this.state.searchValue)}`);

    //verify that the value does not have any special characters
    if (!regex.test(this.state.searchValue) && this.state.searchValue !== "") {
      let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchValue}&apikey=CVH0XQG208A1LHZ6`;

      fetch(url)
        .then((response) => response.json())
        .then((symbolsJSON) =>
          this.setState({
            filteredStockSymbols: symbolsJSON["bestMatches"],
          })
        );
    } else if (this.state.searchValue.includes(" ")) {
      this.setState({
        filteredStockSymbols: [
          {
            "1. symbol": "ERROR!",
            "2. name":
              "Can only input alphabets. No Special Characters Allowed",
            "4. region": "United States",
          },
        ],
      });
    } else if (this.state.searchValue !== "") {
      this.setState({
        filteredStockSymbols: [],
      });
    }
  };

  render() {
    return (
      <div className="search">
        <SearchBox search={this.onSearchChange} />
        <SearchItems
          values={this.state.filteredStockSymbols}
          height={this.props.height}
        />
      </div>
    );
  }
}

export default Search;

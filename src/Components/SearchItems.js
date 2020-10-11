import React, { Component } from "react";
import MenuItem from "./MenuItem";
// import './SearchItems.css';
import Scrollbar from "./Scrollbar";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";

class SearchItems extends Component {
  constructor() {
    super();
    this.state = {
      filteredStockSymbols: [],
    };
    this.storedValue = "";
    this.setArrayThrottled = debounce(
      (searchValue) => this.setFilteredArray(searchValue),
      750
    );
  }

  setFilteredArray = (searchValue) => {
    let regex = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // console.log(this.state.searchValue)
    // console.log(`is ${this.state.searchValue} an alphabet ==> ${alphabet.test(this.state.searchValue)}`);
    // console.log(`\'${this.state.searchValue}\' contains Special char' ==> ${regex.test(this.state.searchValue)}`);

    //verify that the value does not have any special characters
    if (
      !regex.test(searchValue) &&
      searchValue !== "" &&
      searchValue.length < 10 &&
      searchValue !== undefined
    ) {
      let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchValue}&apikey=CVH0XQG208A1LHZ6`;
      console.log(searchValue);
      fetch(url)
        .then((response) => response.json())
        .then((symbolsJSON) => {
          this.setState({
            filteredStockSymbols: symbolsJSON["bestMatches"],
          });
        });
    } else if (searchValue.includes(" ")) {
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
    } else {
      if (true) {
        this.setState({
          filteredStockSymbols: [],
        });
        console.log();
      }
    }
  };

  // componentWillMount() {
  //   this.setState({
  //     filteredStockSymbols: [],
  //   });
  // }

  displayItems = () => {
    if (this.storedValue !== this.props.searchValue) {
      this.storedValue = this.props.searchValue;
      //this.setFilteredArray(this.storedValue);
      this.setArrayThrottled(this.storedValue);
    }
    return this.state.filteredStockSymbols === undefined ? (
      <MenuItem
        symbol="Error!!!"
        name="What did you do!!!!!!!!!!!!!!!!!!!!"
      ></MenuItem>
    ) : (
      this.state.filteredStockSymbols
        .filter((item, i) => {
          return item["4. region"] === "United States";
        })
        .map((item, i) => {
          return (
            <a
              key={i}
              href="/stocks"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <MenuItem
                action="store"
                symbol={item["1. symbol"]}
                name={item["2. name"]}
              ></MenuItem>
            </a>
          );
        })
    );
  };

  // display=()=>(this.state.filteredStockSymbols.isEmpty ? "none" : "block")

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "100%",
          width: "100%",
          height: "auto",
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

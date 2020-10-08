import Stock from "./Stock";
import nasdaqDirectory from "../data/nasdaqDirectory";

class StockLibrary {
  #collection = [];
  static x = 0;

  constructor() {
    if (this.constructor === StockLibrary) {
      throw new TypeError(
        'Abstract class "Widget" cannot be instantiated directly.'
      );
    }
  }

  static add(stockSymbol) {
    if (!this.#collection.includes(stockSymbol)) {
      this.#collection.push(new Stock(stockSymbol));
    }
  }

  // static search(input){

  //   let url =`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=CVH0XQG208A1LHZ6`;

  //   let symbols=[];

  //     fetch(url)
  //     .then(response=> response.json())
  //     .then(symbolsJSON => console.log(symbolsJSON));
  //     return symbols;

  // }

  static filter(value) {
    if (value !== "") {
      return nasdaqDirectory.filter((obj, i) => {
        value = value.toLowerCase();

        let startsWithSymbol = obj.symbol.toLowerCase().startsWith(value);

        let startsWithName = obj.name
          .toLowerCase()
          .split(" ", 3)
          .reduce((acc, word) => {
            return acc || word.startsWith(value);
          }, false);

        return startsWithSymbol || startsWithName;
      });
    } else {
      return [];
    }
  }

  static unique() {
    return StockLibrary.x++;
  }
}

export default StockLibrary;

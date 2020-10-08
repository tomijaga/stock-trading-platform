export class Watchlist{
  constructor(name){
      this.name = name;
      this.stocks = [];
  }

  addStock(stockSymbol){
    if(!this.stocks.includes(stockSymbol)){
    this.stocks.push(stockSymbol);
    return true;
    }else{
      return false;
    }
  }

  deleteStock(stockSymbol){
   let index = this.stocks.indexOf(stockName);
    this.stocks.splice(index, 1);
  }

  toggleStock(stockSymbol){
      if(!addStock(stockSymbol)){
        deleteStock(stockSymbol);
      }
  }
}
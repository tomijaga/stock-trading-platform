import stockDetails from 

export class Order{
  constructor(stockName){
    this.stockName = stockName;
    this.stockDetails = new StockDetails(stockName);
    this.
  }

  setOrderType(buyOrSell, orderType, expireType,quantity){
      this.buyOrSell = buyOrSell;
      this.orderType = orderType;
      this.expireType = expireType;
      this.quantity = quantity;
  }

  isOrderValid(){
    
    (orderType === "limit" || orderType === "market")
    (expireType === "day" || expireType === "gtc")
    (quantity > 0);
    
  }

  isbuyOrSellValid(){
      (buyOrSell === "buy" || buyOrSell === "sell")

      if(buyOrSell === "sell"){
          if()
      }
  }
}
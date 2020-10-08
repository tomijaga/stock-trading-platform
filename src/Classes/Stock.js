import React, {Component} from 'react';

 class Stock extends Component{
  constructor(symbol){
    super();
    this.symbol= symbol;
    this.state = {
    stockDataX:[],
    stockDataY: []
    }
    this.x=[];
    this.y =[];
  }

componentDidMount(){
  this.fetchStock();
}

 fetchStock(){
   const pointerToThis = this;
   console.log(pointerToThis);
    const API_KEY = "CVH0XQG208A1LHZ6";
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.symbol}&interval=1min&outputsize=compact&apikey=${API_KEY}`;

     let stockDataXFunction =[];
    let stockDataYFunction =[];

    fetch(API_CALL)
    .then(
      function(response){
        return response.json()
      }
    )
    .then(
      function(data){
        console.log(Object.values(data["Time Series (1min)"]));
            stockDataXFunction = Object.keys(data["Time Series (1min)"]);
            stockDataYFunction = Object.values(data["Time Series (1min)"]).map(
              obj=>{
                    return {
                      open:obj["1. open"],
                      high:obj["2. high"],
                      low:obj["3. low"],
                      close:obj["4. close"],
                      volume:obj["5. volume"],
                    }
            }
            );

          pointerToThis.setState({
          stockDataX: stockDataXFunction,
          stockDataY: stockDataYFunction
      });
      }
     
    )

     
}
  render(){
    return(
      <div>
        <p> {this.state.stockDataY}</p>
      </div>
    )
  }


}

export default Stock;



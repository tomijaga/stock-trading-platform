
const fetchStock=(symbol)=>{
    const API_KEY = "CVH0XQG208A1LHZ6";
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&outputsize=compact&apikey=${API_KEY}`;

    let API_CALL2 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&outputsize=full&apikey=demo`;

let x =[];
    let y =[];


     fetch(API_CALL)
    .then(
      function(response){
        return response.json()
      }
    )
    .then(
      function(data){
       // console.log(Object.values(data["Time Series (1min)"]));
       setTimeout(function(){
    console.log("did nothing!");
  }, 5000);
            x = Object.keys(data["Time Series (1min)"]);
            
            y = Object.values(data["Time Series (1min)"]);

       setTimeout(function(){
    console.log("did nothing!");
  }, 5000);
  }
    )
 
  console.log([x,y]);
    return [x,y];
}

function getStockData(symbol){
  return fetchStock(symbol);
  
}

export default getStockData;
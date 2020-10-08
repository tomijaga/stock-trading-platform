import ChartContainer from "../Components/ChartContainer";
import AnyChart from "anychart-react/dist/anychart-react.min.js";
import anychart from "anychart";
import React, { useState, useEffect } from "react";

const msftDataTable = anychart.data.table();
msftDataTable.addData(window.get_msft_daily_short_data());
const orclDataTable = anychart.data.table();
orclDataTable.addData(window.get_orcl_daily_short_data());
const cscoDataTable = anychart.data.table();
cscoDataTable.addData(window.get_csco_daily_short_data());
const ibmDataTable = anychart.data.table();
ibmDataTable.addData(window.get_ibm_daily_short_data());
const chart = anychart.stock();
const firstPlot = chart.plot(0);
firstPlot.area(msftDataTable.mapAs({ value: 4 })).name("MSFT");
const secondPlot = chart.plot(1);
secondPlot
  .splineArea(orclDataTable.mapAs({ value: 4 }))
  .fill("#1976d2 0.65")
  .stroke("1.5 #1976d2")
  .name("ORCL");
const thirdPlot = chart.plot(2);
thirdPlot
  .stepArea(cscoDataTable.mapAs({ value: 4 }))
  .fill("#ef6c00 0.65")
  .stroke("1.5 #ef6c00")
  .name("CSCO");
const forthPlot = chart.plot(3);
forthPlot
  .line(msftDataTable.mapAs({ value: 4 }))
  .name("MSFT")
  .tooltip(null);
forthPlot
  .spline(orclDataTable.mapAs({ value: 4 }))
  .name("ORCL")
  .tooltip(null);
forthPlot
  .stepLine(cscoDataTable.mapAs({ value: 4 }))
  .name("CSCO")
  .tooltip(null);
chart.scroller().area(msftDataTable.mapAs({ value: 4 }));

const dateWithYearPlus = (value = 0) => {
  let todaysDate = new Date();
  let x = todaysDate.getDate();
  let y = todaysDate.getMonth();
  let z = todaysDate.getFullYear();

  x = x < 10 ? "0" + x : x + "";
  y = y < 10 ? "0" + y : y + "";

  return `${z + value}-${y}-${z}`;
};

chart.selectRange(dateWithYearPlus(-2), dateWithYearPlus());

const Chart = (props) => {
  const [chartInfo, setChartInfo] = useState(0);

  const createChart = (stockSymbol) => {
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=1min&apikey=RNZT6A08GD0ICJQQ`;

    fetch(url)
      .then((response) => response.json())
      .then((chartInfo) => {
        setChartInfo();
      });
  };

  const getFinnhubData = () => {
    const finnhub = require("finnhub");

    const api_key = finnhub.ApiClient.instance.authentications["api_key"];
    api_key.apiKey = "btmdn7v48v6uocf2j9i0"; // Replace this
    const finnhubClient = new finnhub.DefaultApi();

    // Stock candles
    finnhubClient.stockCandles(
      "AAPL",
      "D",
      1590988249,
      1591852249,
      {},
      (error, data, response) => {
        console.log(data);
      }
    );
  };

  console.log(getFinnhubData());
  console.log(createChart());

  return (
    <div>
      <ChartContainer>
        <AnyChart
          instance={chart}
          id="anychart"
          type="column"
          width={800}
          height={600}
          title="Stock Demo"
          legend="true"
        />
      </ChartContainer>
    </div>
  );
};

export default Chart;

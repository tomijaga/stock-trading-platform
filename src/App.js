import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WatchlistPage from "./WebPages/WatchlistPage.js";
import MarketPage from "./WebPages/MarketPage";
import AlertsPage from "./WebPages/AlertsPage";
import StocksPage from "./WebPages/StocksPage";
import RoboTradingPage from "./WebPages/RoboTradingPage";
import TradingPage from "./WebPages/TradingPage";
import NoMatch from "./WebPages/NoMatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MarketPage />
          </Route>
          <Route path="/watchlist">
            <WatchlistPage />{" "}
          </Route>
          <Route path="/alerts">
            <AlertsPage />{" "}
          </Route>
          <Route path="/stocks">
            <StocksPage />{" "}
          </Route>
          <Route path="/trade">
            <TradingPage />
          </Route>
          <Route path="/robo-trade">
            {" "}
            <RoboTradingPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import watchlistIcon from "../Icons/watchlist.white.svg";
import marketIcon from "../Icons/worldwide.svg";
import alertsIcon from "../Icons/bell(1).svg";
import stocksIcon from "../Icons/stock-market(2).svg";
import tradeIcon from "../Icons/stock.svg";
import roboTradeIcon from "../Icons/processor.svg";
import IconWithInfoTip from "../Components/IconWithInfoTip.js";
import Center from "../Components/Center";

export default class Navbar extends Component {
  constructor() {
    super();
    this.style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
      justifyContent: "flex-start",
    };
  }

  render() {
    return (
      <div
        style={{
          display: "grid",
          borderRight: "20px",
          borderColor: "white",
          background: "rgb(10, 30, 40)",
          height: "100%",
          gridTemplateRows: "auto auto auto",
          width: "4rem",
          zIndex: "99",
        }}
      >
        <div>
          <div className="section-1" style={this.style}>
            <Center>
              <a href="/">
                <IconWithInfoTip
                  info="World-Markets"
                  url={marketIcon}
                  iconHeight="25px"
                  iconWidth="25px"
                />
              </a>
            </Center>

            <Center>
              <a href="/watchlist">
                <IconWithInfoTip
                  info="Watchlists"
                  url={watchlistIcon}
                  iconHeight="25px"
                  iconWidth="25px"
                />
              </a>
            </Center>

            <Center>
              <a href="/alerts">
                <IconWithInfoTip
                  info="Alert"
                  url={alertsIcon}
                  iconHeight="25px"
                  iconWidth="25px"
                />
              </a>
            </Center>

            <Center>
              <a href="/stocks">
                <IconWithInfoTip
                  info="Stocks"
                  url={stocksIcon}
                  iconHeight="25px"
                  iconWidth="25px"
                />
              </a>
            </Center>

            <Center>
              <a href="/trade">
                <IconWithInfoTip
                  info="Trade"
                  url={tradeIcon}
                  iconHeight="25px"
                  iconWidth="25px"
                />
              </a>
            </Center>

            <Center>
              <a href="/robo-trade">
                <IconWithInfoTip
                  info="Robo-Trade"
                  url={roboTradeIcon}
                  iconHeight="25px"
                  iconWidth="25px"
                />
              </a>
            </Center>
          </div>

          <div className="empty-section"></div>

          <div className="section-2" style={this.style}></div>
        </div>
      </div>
    );
  }
}

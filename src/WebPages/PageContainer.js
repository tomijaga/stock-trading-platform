import Header from "../PageElements/Header";
import Navbar from "../PageElements/Navbar";
import Footer from "../PageElements/Footer";
import React, { Component } from "react";
import "../App.css";

export default class PageContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="setPageRegions">
        <Header />

        <div className="bodyRegion">
          <Navbar></Navbar>

          <div
            style={{
              height: "calc(100vh - 5rem)",
              width: "calc(100vw - 4rem)",
            }}
          >
            {this.props.children}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

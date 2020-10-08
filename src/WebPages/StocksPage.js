import React from "react";
import Chart from "../PageElements/Chart";
import PageContainer from "./PageContainer";

export const StocksPage = () => (
  <PageContainer>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
          border: " 0.5pt solid white",
          gridColumn: "1 / span 2",
        }}
      >
        <Chart style={{ height: "100%", width: "100%" }} />
        <p style={{ color: "azure" }}>1</p>
      </div>
      <div
        style={{
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
          border: " 0.5pt solid white",
        }}
      >
        <p style={{ color: "azure" }}>2</p>
      </div>
      <div
        style={{
          backgroundColor: "tansparent",
          height: "100%",
          width: "100%",
          border: " 0.5pt solid white",
        }}
      >
        <p style={{ color: "azure" }}>3</p>
      </div>
    </div>{" "}
  </PageContainer>
);

export default StocksPage;

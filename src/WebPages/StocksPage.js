import React from "react";
import ChartTab from "../PageElements/ChartTab";
import PageContainer from "./PageContainer";
import NewsTab from "../PageElements/NewsTab";

const StocksPage = () => (
  <PageContainer>
    <div
      style={{
        display: "grid",
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
        }}
      >
        <ChartTab style={{ height: "100%", width: "100%" }} />
      </div>

      <div
        style={{
          backgroundColor: "tansparent",
          height: "100%",
          width: "100%",
          border: " 0.5pt solid white",
        }}
      >
        <NewsTab newsFrom={"TSLA"}></NewsTab>
      </div>
    </div>{" "}
  </PageContainer>
);

export default StocksPage;

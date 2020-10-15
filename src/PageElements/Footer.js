import React from "react";
import Time from "../Components/Time";
import DateDiv from "../Components/DateDiv";

const Footer = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      background: "rgb(10, 20, 30)",
      height: "2rem",
      width: `calc(100vw-${30 * 2}pt)`,
      padding: "0px 20pt",
      alignItems: "center",
      fontSize: "1rem",
    }}
  >
    <DateDiv />
    <span style={{ padding: "0px 10pt" }}></span>
    <Time />
  </div>
);

export default Footer;

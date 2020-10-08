import React from "react";
import Time from "../Components/Time";
import DateComponent from "../Components/Date";

const Footer = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      background: "rgb(10, 20, 30)",
      height: "2rem",
      width: "calc(100vw-20px)",
      padding: "0px 20px",
      alignItems: "center",
      fontSize: "1rem",
    }}
  >
    <Time />
  </div>
);

export default Footer;

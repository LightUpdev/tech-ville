import React from "react";
import { contentStyle } from "../styles/content";
import Cards from "./cards";

const Content = () => {
  return (
    <div style={contentStyle.container}>
      <Cards />
    </div>
  );
};

export default Content;

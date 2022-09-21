import React from "react";
import "./CircularLoader.modules.css";
import CircularLoaderProps from "./CircularLoader.types";

const CircularLoader: React.FC<CircularLoaderProps> = ({
  size = "30px",
  color = "#FA7070",
  styles,
  ...others
}) => {
  return (
    <div
      className="circular-loader"
      style={{
        borderTop: "3px solid " + color,
        fontSize: size,
        ...styles,
      }}
      {...others}
    ></div>
  );
};

export default CircularLoader;

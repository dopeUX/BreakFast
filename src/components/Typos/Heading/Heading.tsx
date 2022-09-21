import React from "react";
import "./Heading.modules.css";
import HeadingProps from "./Heading.types";

const Heading: React.FC<HeadingProps> = ({
  title = "This is a yummy text !",
  size = "large",
  color,
  underlined = false,
  styles,
  ...others
}) => {
  return (
    <div>
      <h1
        className="heading"
        style={{
          fontSize: calc(size),
          color: color,
          textDecoration: underlined ? "underline" : "none",
          ...styles,
        }}
        {...others}
      >
        {title}
      </h1>
    </div>
  );
};

const calc = (size: string) => {
  if (size === "extraLarge" || size === "large" || size === "medium") {
    return getSize[size];
  } else {
    return size;
  }
};
const getSize: any = {
  "extra-large": "3.5rem",
  large: "2.5rem",
  medium: "1.5rem",
};
export default Heading;

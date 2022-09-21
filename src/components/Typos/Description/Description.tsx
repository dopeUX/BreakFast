import React from "react";
import "./Description.modules.css";
import DescriptionProps from "./Description.types";

const randomText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

const Description: React.FC<DescriptionProps> = ({
  title = randomText,
  color,
  size,
  cap = false,
  capColor,
  styles,
}) => {
  return (
    <p
      className="description"
      style={{
        color: color,
        fontSize: size,
        ...styles,
      }}
    >
      <span
        className={`${cap && "description-cap"}`}
        style={{
          color: capColor,
        }}
      >
        {title.charAt(0)}
      </span>
      {title.slice(1)}
    </p>
  );
};

export default Description;

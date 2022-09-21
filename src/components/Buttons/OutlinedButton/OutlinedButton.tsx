import React from "react";
import "./OutlinedButton.modules.css";
import outlinedButtonProps from "./OutlinedButton.types";

const OutlinedButton: React.FC<outlinedButtonProps> = ({
  title = "Tasty !",
  btnType,
  color = "",
  btnSize = "md",
  isLoading = false,
  styles,
}) => {
  return (
    <button
      className={`simple-outlined-btn ${getButtonType[btnType]} ${btnSize}`}
      style={{ border: `3px solid ${color}`, color: color, ...styles }}
    >
      {title}
      <div
        className="lds-ellipsis"
        style={{ display: isLoading ? "inline-block" : "none" }}
      >
        <div
          className={`${color === "" && "setDefaultColor"} ${
            getColorType[btnType]
          }`}
          style={{ background: color }}
        ></div>
        <div
          className={`${color === "" && "setDefaultColor"} ${
            getColorType[btnType]
          }`}
          style={{ background: color }}
        ></div>
        <div
          className={`${color === "" && "setDefaultColor"} ${
            getColorType[btnType]
          }`}
          style={{ background: color }}
        ></div>
        <div
          className={`${color === "" && "setDefaultColor"} ${
            getColorType[btnType]
          }`}
          style={{ background: color }}
        ></div>
      </div>
    </button>
  );
};

const getButtonType = {
  primary: "outlined-btn-primary",
  secondary: "outlined-btn-secondary",
  yummy: "outlined-btn-yummy",
  chocolatey: "outlined-btn-chocolatey",
  dark: "outlined-btn-dark",
};

const getColorType = {
  primary: "outlined-btn-loader-primary",
  secondary: "outlined-btn-loader-secondary",
  yummy: "outlined-btn-loader-yummy",
  chocolatey: "outlined-btn-loader-chocolatey",
  dark: "outlined-btn-loader-dark",
};

export default OutlinedButton;

import * as React from "react";
import "./TextBox.modules.css";
import TextBoxSimpleProps from "./TextBoxSimple.types";

const TextBoxSimple: React.FC<TextBoxSimpleProps> = ({
  label = "Your Name",
  labelColor = "#ffffff",
  activeColor = "#65C18C",
  width,
  errorMessage = "name should not be left empty !",
  showError = false,
  labelPosition = "start",
  ...otherAttributes
}) => {
  // const [border, setBorder] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  // let color = activeColor ? activeColor : " #65C18C";
  const styleWhenActive = {
    border: "2px solid " + activeColor,
  };
  const styleWhenNotActive = {
    border: "2px solid  #c5c5c5",
  };
  return (
    <div className="textbox-simple-section">
      <div
        className={`textbox-simple ${isFocused && "change-border"} ${
          labelPosition === "end" ? "textbox-simple-label-end" : ""
        }`}
        style={{
          width: width,
          ...(isFocused ? styleWhenActive : styleWhenNotActive),
        }}
      >
        <div
          className="label-box"
          style={{
            backgroundColor: isFocused ? activeColor : "#efefef",
          }}
        >
          <h3
            style={{
              color: isFocused ? labelColor : "#979797",
            }}
          >
            {label}
          </h3>
        </div>
        <input
          className=""
          type="text"
          placeholder=""
          name="name"
          id=""
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...otherAttributes}
        />
      </div>
      <span
        style={{
          display: showError ? "block" : "none",
        }}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default TextBoxSimple;

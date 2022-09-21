import React, { useState } from "react";
import "./MaterialTextBox.modules.css";
import MaterialTextBoxProps from "./MaterialTextBox.types";

const MaterialTextBox: React.FC<MaterialTextBoxProps> = ({
  label = "your name",
  accentColor = "rgb(223, 244, 247)",
  borderColor = "rgb(97, 174, 184)",
  styles,
  errorMessage = "name should not be left empty",
  showError = false,
  ...other
}) => {
  const [labelStyle, setLabelStyle] = useState<React.CSSProperties>();
  return (
    <div className="MaterialTextBoxSection">
      <div className="MaterialTextBox">
        <label htmlFor="in" style={labelStyle}>
          {label}
        </label>
        <input
          type="text"
          name="in"
          className={``}
          style={{ ...styles }}
          {...other}
          onFocus={(e) => {
            setLabelStyle({ animation: "animUp .3s forwards" });
            e.currentTarget.style.backgroundColor = accentColor;
            e.currentTarget.style.border = "2px solid " + borderColor;
          }}
          onBlur={(e) => {
            if (e.currentTarget.value === "") {
              setLabelStyle({ animation: "animDown .3s forwards" });
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.border = "0";
              e.currentTarget.style.borderBottom = "2px solid #737373";
            }
          }}
        />
      </div>
      {showError && <small>{errorMessage}</small>}
    </div>
  );
};

export default MaterialTextBox;

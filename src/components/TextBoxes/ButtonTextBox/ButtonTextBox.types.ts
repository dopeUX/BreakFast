import React from "react";
import Color from "../../../Colors.types";

export default interface ButtonTextBoxProps
  extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  styles?: React.CSSProperties;
  buttonTextColor?: Color;
  accentColor?: Color;
  errorMessage?: string;
  showError?: boolean;
}
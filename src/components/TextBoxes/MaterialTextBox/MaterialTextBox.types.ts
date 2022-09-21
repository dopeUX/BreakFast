import Color from "../../../Colors.types";
import React from "react";
export default interface MaterialTextBoxProps extends React.HTMLAttributes<HTMLInputElement>{
    label: string;
    accentColor?: Color;
    borderColor?: Color;
    styles?: React.CSSProperties;
    errorMessage?: string;
    showError?: boolean;
}
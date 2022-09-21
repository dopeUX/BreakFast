import React from "react";
import Color from "../../../Colors.types";

export default interface SpinnerLoaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: string;
  color?: Color;
  styles?: React.CSSProperties;
}

import React from "react";
import Color from "../../../Colors.types";


export default interface CircularAvatarProps
  extends React.HTMLAttributes<HTMLImageElement> {
  url: string;
  size?: string;
  border?: boolean;
  borderColor?: Color;
  shadow?: boolean;
  styles?: React.CSSProperties;
}
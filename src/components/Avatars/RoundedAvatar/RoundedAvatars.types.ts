import Color from "../../../Colors.types";
import React from "react";

export default interface RoundedAvatarProps
  extends React.HTMLAttributes<HTMLImageElement> {
  url: string;
  size?: string;
  border?: boolean;
  borderColor?: Color;
  shadow?: boolean;
  styles?: React.CSSProperties;
}

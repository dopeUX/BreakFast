import React from "react";
import Color from "../../../Colors.types";

export default interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
    size?: string;
    color?: Color;
    underlined?: boolean;
    styles?: React.CSSProperties;
  }
import React from "react";

export default interface ErrorTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  title: string;
  icon?: string | "type1" | "type2" | "type3";
  showIcon?: boolean;
  styles?: React.CSSProperties;
}
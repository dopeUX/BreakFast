import React from "react";

export default interface SuccessTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  title: string;
  icon?: string | "type1" | "type2" | "type3";
  showIcon?: boolean;
  styles?:React.CSSProperties;
}
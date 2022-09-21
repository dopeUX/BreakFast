import React from "react";
import Color from "../../../Colors.types";

export default interface DescriptionProps
extends React.HTMLAttributes<HTMLParagraphElement> {
title: string;
color?: Color;
size?: string;
cap?: boolean;
capColor?: Color;
styles?: React.CSSProperties;
}
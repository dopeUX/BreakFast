import Color from "../../../Colors.types";

export default interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  btnType: "primary" | "secondary" | "yummy" | "chocolatey" | "dark";
  title: string;
  textColor?: Color;
  bgColor?: Color;
  btnSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  isLoading?: boolean;
  styles?: React.CSSProperties;
  className?: string;
}
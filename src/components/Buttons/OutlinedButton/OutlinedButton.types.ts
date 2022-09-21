import Color from "../../../Colors.types";

export default interface outlinedButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  btnType: "primary" | "secondary" | "yummy" | "chocolatey" | "dark";
  title: string;
  color?: Color | "";
  btnSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  isLoading: boolean;
  styles?: React.CSSProperties;
  className?: string;
}

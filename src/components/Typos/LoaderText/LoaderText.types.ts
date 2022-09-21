import Color from "../../../Colors.types";

export default interface LoaderTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  loaderPosition?: "start" | "end";
  color?: Color;
  isLoading?: boolean;
  fontSize?: string;
  styles?: React.CSSProperties;
}

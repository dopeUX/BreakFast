import Color from "../../../Colors.types";

type labelPosition = "start" | "end";
export default interface TextBoxSimpleProps
  extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  labelColor: Color;
  activeColor?: Color;
  errorMessage?: string;
  showError?: boolean;
  width?: number | string;
  labelPosition?: labelPosition;
}
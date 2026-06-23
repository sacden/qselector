import { TextInput, TextInputProps } from "react-native";
import { sizeStyles } from "../../../../styles";
import { variantStyles, styles } from "./Input.styles";

type InputSize = "sm" | "md" | "lg";
type InputVariant = "outlined" | "plain";

type Props = TextInputProps & {
  size?: InputSize;
  variant?: InputVariant;
};

export default function Input({ size = "md", variant = "outlined", style, ...props }: Props) {
  return <TextInput {...props} style={[styles.input, variantStyles[variant], sizeStyles[size], style]} />;
}

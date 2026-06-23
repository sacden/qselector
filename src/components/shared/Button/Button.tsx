import { Pressable, Text } from "react-native";
import { styles } from "./Button.styles";
import { textColors } from "./Button.constants";
import type { ButtonVariant } from "./Button.types";

type Props = {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  style?: ViewStyle;
};

export default function Button({ title, onPress, variant = "default", style }: Props) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, { color: textColors[variant] }]}>{title}</Text>
    </Pressable>
  );
}

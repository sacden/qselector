import { Pressable, Text } from "react-native";
import { styles } from "./Button.styles";
import { textColors } from "./Button.constants";
import type { ButtonVariant } from "./Button.types";

type Props = {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
};

export default function Button({ title, onPress, variant = "default" }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={[styles.text, { color: textColors[variant] }]}>{title}</Text>
    </Pressable>
  );
}

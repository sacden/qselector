import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import { styles } from "./Button.styles";
import { textColors } from "./Button.constants";
import type { ButtonVariant } from "./Button.types";

type Props = {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

export default function Button({
  title,
  onPress,
  variant = "default",
  style,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
}: Props) {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
    >
      <Text style={[styles.text, { color: textColors[variant] }]} importantForAccessibility="no-hide-descendants">
        {title}
      </Text>
    </Pressable>
  );
}

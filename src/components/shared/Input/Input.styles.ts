import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { typography } from "../../../constants/typography";

export const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 12,
    color: COLORS.black,
    ...typography.regular,
  },
});

/**
 * VARIANTS
 */
export const variantStyles = {
  outlined: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.lightGray,
    backgroundColor: "transparent",
    ...typography.bold,
  },

  plain: {
    borderWidth: 0,
    backgroundColor: "transparent",
  },
};

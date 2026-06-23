import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

export const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 14,
    color: COLORS.black,
  },
});

/**
 * VARIANTS
 */
export const variantStyles = {
  outlined: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: "transparent",
  },

  plain: {
    borderWidth: 0,
    backgroundColor: "transparent",
  },
};

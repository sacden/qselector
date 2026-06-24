import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { typography } from "../../../constants/typography";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.gray,
    paddingVertical: 8,
    alignItems: "center",
  },

  text: {
    fontSize: 12,
    ...typography.regular,
  },
});

import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

export const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: COLORS.gray,
    paddingVertical: 8,
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

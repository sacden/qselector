import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  current: {
    fontSize: 14,
    fontWeight: "500",
  },
  groupContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  groupItem: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  groupItemLast: {
    borderRightWidth: 0,
  },
  buttonStyle: {
    borderWidth: 0,
    paddingVertical: 13,
  },
  deltaInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputDelta: {
    flex: 1,
    fontSize: 12,
    textAlign: "center",
    padding: 0,
    minWidth: 40,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});

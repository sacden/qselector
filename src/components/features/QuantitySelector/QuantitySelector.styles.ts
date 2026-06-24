import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { typography } from "../../../constants/typography";
import { GRID } from "./QuantitySelector.constants";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  gridRow: {
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
  },
  labelRow: {
    marginHorizontal: 1,
  },
  gridCell: {
    flex: 1,
    minWidth: 0,
    justifyContent: "center",
  },
  labelSpan: {
    flex: GRID.labelSpan,
    minWidth: 0,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  inputColumn: {
    flex: GRID.inputSpan,
    minWidth: 0,
    justifyContent: "center",
  },
  borderedRow: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  borderedCell: {
    borderRightWidth: 1,
    borderRightColor: COLORS.lightGray,
  },
  borderedCellLast: {
    borderRightWidth: 0,
  },
  label: {
    fontSize: 12,
    textAlign: "right",
    paddingRight: 4,
    ...typography.regular,
  },
  buttonStyle: {
    borderWidth: 0,
    paddingVertical: 13,
  },
  quantityInput: {
    width: "100%",
    height: 30,
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: 0,
    fontVariant: ["tabular-nums"],
    ...typography.regular,
  },
});

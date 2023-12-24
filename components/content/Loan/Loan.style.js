import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const LoanStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: "6%",

  },
  border: {
    width: "48%",
    height: 56,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
  },
});

export default LoanStyle;

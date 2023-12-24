import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const StoresStyle = StyleSheet.create({
  container: {
    width: 100,
    height: 80,
    borderWidth: 0.5,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  scrollDesign: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
export default StoresStyle;

import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const BrandRetailStyle = StyleSheet.create({
  container: {
    marginBottom:'5%',
    marginHorizontal:'4%'
  },
  catView: {},
  titleContainer: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  titleStyle: {
    color: colors.egBlue,
    fontSize: 16,
    fontWeight: "400",
  },
  selectedTitleContainer: {
    backgroundColor: colors.green,
  },
  selectedTitleStyle: {
    color: "white",
  },
});

export default BrandRetailStyle;

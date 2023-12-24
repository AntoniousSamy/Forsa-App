import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const OffersBorderStyle = StyleSheet.create({
  
    container: {
      width: 325,
      height: 138,
      backgroundColor: "transparent",
      borderRadius: 20,
      borderColor: colors.green,
      borderWidth: 3,
      elevation: 5,
    },

  backgroundImage: {
    width: "100%",
    height: "100%",
    borderRadius: 19,
  },
});

export default OffersBorderStyle;

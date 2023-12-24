import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const CardStyle = StyleSheet.create({
  offerContainer: {
    width: "41%",
    height: "40%",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.01)",
    marginBottom: "4%",
  },
  thumbnail: {
    height: "100%",
    width: "100%",
  },
  thumbnailContainer: {
    height: 100,
  },
  bottomContainer: {
    height: "20%",
    width: "100%",
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 30,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "3%",
  },
  secEnTitle: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.darkGrey,
  },
  brandTitle: {
    fontSize: 15,
    fontWeight: "400",
  },
  offerLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.darkGrey,
  },
});

export default CardStyle;

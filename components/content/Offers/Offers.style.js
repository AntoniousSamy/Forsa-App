import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const OffersStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "100%",
  },
  offerContainer: {
    width: "41%",
    height: "40%",
    backgroundColor: colors.white,
    borderRadius: 20,
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
    height: 200,
  },
  bottomContainer: {
    height: "60%",
    width: "100%",
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent:"center",
    alignItems:"center"
  },
  secEnTitle: {
    fontSize: 16,
    fontWeight: "300",
    color:colors.darkGrey,
  },
  brandTitle: {
    fontSize: 20,
    fontWeight:"700",
    marginBottom: 20,
  },
  offerLabel: {
    fontSize: 16,
    fontWeight: "300",
    color:colors.darkGrey,
  },
});

export default OffersStyle;

import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

const screenWidth = Dimensions.get("window").width;

const HeaderStyle = StyleSheet.create({
  borderContainer: {
    position: "relative",
    width: screenWidth,
    backgroundColor: colors.egBlue,
    borderBottomLeftRadius: screenWidth * 0.6,
    borderBottomRightRadius: screenWidth * 0.6,
    overflow: "hidden",
    alignSelf: "center",
    transform: [{ scaleX: 2 }],
  },
  contentContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 40,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 16,
  },
  homeIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
  },
  centerImage: {
    flex: 1,
    alignItems: "center",
    marginLeft: screenWidth * 0.05,
    position: "relative", 
  },
  centerText: {
    flex: 1,
    alignItems: "center",
    marginLeft: screenWidth * 0.15,
  },
  logoImage: {
    width: 40,
    height: 70,
  },
  otherIcons: {
    flexDirection: "row",
  },
  limitBorder: {
    position: "absolute",
    width: 350,
    height: 62,
    top: 90,
    start: 35,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.yellow,
    borderRadius: 10,
  },
  limitBorderContent: {
    flexDirection: "row",
    padding: 6,
    start:'15%'
  },
  limitBorderText: {
    marginLeft: "2%",
  },
});

export default HeaderStyle;

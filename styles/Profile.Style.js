import { StyleSheet } from "react-native";

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: "10%",
    marginLeft: "8%",
    borderRadius: 10,
  },
  personName: {
    fontSize: 21,
    fontWeight: "400",
  },
  contentContainer: {
    marginHorizontal: "5%",
    marginTop: "10%",
  },
  shareText: {
    fontSize: 18,
    fontWeight: "400",
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  changeLanguageText: {
    fontSize: 18,
    fontWeight: "400",
  },
  langText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
export default ProfileStyle;

import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
 
  arrowsContainer: {
    position: "absolute",
    flexDirection: "row",
    zIndex: -1,
    paddingTop: "100%",
  },
 
  scrollView: {
    marginTop: "20%",
  },
  storesContainer: {
    marginHorizontal: "10%",
  },
  loanSection: {
    marginTop: "10%",
  },
  offersSection: {
    marginBottom: "70%",
    marginTop: "5%",
  },
});
export default HomeStyle;

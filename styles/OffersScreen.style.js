import { StyleSheet } from "react-native";

const OfferScreenStyle =StyleSheet.create({
    container: {
        flex: 1,
      },
      buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "2%",
      },
      scrollViewContent: {
        flexGrow: 1,
        marginBottom: "80%",
      },
      cardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "30%",
        flex: 1,
      },
})
export default OfferScreenStyle;

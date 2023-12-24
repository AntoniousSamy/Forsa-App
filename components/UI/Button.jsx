import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";
const Button = ({ btnText, onPress, isActive }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.btnStyle,
          { backgroundColor: isActive ? colors.green : colors.white },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.buttonText,
            { color: isActive ? colors.white : colors.darkGrey },
          ]}
        >
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: 50,
    marginBottom: 10,
  },
  btnStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

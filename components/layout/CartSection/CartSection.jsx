import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CartSectionStyle from "./CartSection.style";

const CartSection = ({ title, btnText, children, onPress }) => {
  return (
    <>
      <View
        style={CartSectionStyle.container}
      >
        <Text style={CartSectionStyle.titleStyle}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={CartSectionStyle.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
      </View>
      <>{children}</>
    </>
  );
};

export default CartSection;

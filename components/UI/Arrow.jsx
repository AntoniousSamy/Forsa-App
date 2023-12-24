import React from "react";
import { View } from "react-native";

const Arrow = ({ color }) => {
  return (
    <View style={{ flexDirection: "column", marginStart: "18%" }}>
      <View
        style={{
          height: 120,
          width: 35,
          backgroundColor: color,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          height: 140,
          width: 35,
          backgroundColor: color,
          transform: [{ rotate: "45deg" }],
          top: -55,
        }}
      />
    </View>
  );
};

export default Arrow;

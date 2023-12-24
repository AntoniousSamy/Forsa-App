import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
const CustomTabBar = ({
  iconGrop,
  icon,
  label,
  onPress,
  accessibilityState,
}) => {
  const isSelected = accessibilityState.selected;
  const iconColor = isSelected ? colors.egBlue : colors.grey;

  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selected : null]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        {iconGrop === "Ionicons" ? (
          <Ionicons name={icon} size={25} color={iconColor} />
        ) : (
          <MaterialCommunityIcons  name={icon} size={25} color={iconColor} />
        )}

        {label && (
          <Text style={isSelected ? styles.selectedText : styles.text}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    elevation: 5,
    marginTop: "4%",
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.darkGrey,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 4,
  },

  selectedText: {
    color: colors.egBlue,
    fontWeight: "400",
    fontSize: 16,
    marginTop: 4,
  },
});

export default CustomTabBar;

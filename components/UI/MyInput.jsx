import React from "react";
import { View, TextInput, StyleSheet, I18nManager } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import colors from "../../constants/colors";
import { useTranslation } from "react-i18next";

const MyInput = () => {
  const { t } = useTranslation();
  const isRTL = I18nManager.isRTL;

  return (
    <View style={styles.inputContainer}>
      <AntDesign name="search1" size={24} color="grey" style={styles.icon} />
      <TextInput
        placeholder={t('search')}
        style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
        placeholderTextColor="grey"
      />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 50,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 10,
    marginRight:10
  },
  input: {
    flex: 1,
    height: 50,
    color: "black", 
  },
});

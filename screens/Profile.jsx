import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, I18nManager } from "react-native";
import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header/Header";
import { DUMMY_DATA } from "../dummy-data";
import ProfileStyle from "../styles/Profile.Style";
import i18n from "../i18n";
import * as Updates from 'expo-updates';
const Profile = () => {
  const dummyProduct = DUMMY_DATA[0];
  const [currentLanguage, setCurrentLanguage] = useState("english");
  const { t, i18n: i18nInstance } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "english" ? "arabic" : "arabic";
    setCurrentLanguage(newLanguage);

    i18nInstance
      .changeLanguage(i18n.language === "en" ? "ar" : "en")
      .then(() => {
        I18nManager.allowRTL(i18n.language === "ar");
        I18nManager.forceRTL(i18n.language === "ar");
        Updates.reloadAsync();
      });
  };

  return (
    <View style={ProfileStyle.container}>
      <Header headerText={t("profile")} height={150} />
      <View style={ProfileStyle.rowContainer}>
        <Image source={dummyProduct.image} style={ProfileStyle.image} />
        <Text style={ProfileStyle.personName}>{dummyProduct.name}</Text>
      </View>
      <View style={ProfileStyle.contentContainer}>
        <Text style={ProfileStyle.shareText}>{t("shareApp")}</Text>
        <View style={ProfileStyle.languageContainer}>
          <Text style={ProfileStyle.changeLanguageText}>{t("changeLanguage")}:</Text>
          <TouchableOpacity onPress={toggleLanguage}>
            <Text style={ProfileStyle.langText}>{t(currentLanguage)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Logo from "../../../assets/image/Logo.png";
import writingIcon from "../../../assets/image/writing.png";
import colors from "../../../constants/colors";
import HeaderStyle from "./Header.style";
import { useTranslation } from 'react-i18next';
const Header = ({ height, isHome, headerText }) => {
  const { t } = useTranslation();
  return (
    <View>
      <View style={[HeaderStyle.borderContainer, { height }]} />
      <View style={HeaderStyle.contentContainer}>
        <View style={HeaderStyle.iconsContainer}>
          {isHome ? (
            <>
              <View style={HeaderStyle.homeIcons}>
                <FontAwesome name="search" size={28} color={colors.white} />
              </View>
              <View style={HeaderStyle.centerImage}>
                <Image source={Logo} style={HeaderStyle.logoImage} />
              </View>
              <View style={HeaderStyle.limitBorder}>
                <View style={HeaderStyle.limitBorderContent}>
                  <Image
                    source={writingIcon}
                    style={{ width: 45, height: 45 }}
                  />
                  <View style={HeaderStyle.limitBorderText}>
                    <Text
                      style={{
                        color: colors.yellow,
                        fontWeight: "400",
                        fontSize: 16,
                        marginBottom: "2%",
                      }}
                    >
                      {t("yelloBorderTitle")}
                    </Text>
                    <Text
                      style={{
                        color: colors.yellow,
                        fontWeight: "300",
                        fontSize: 12,
                      }}
                    >
                      {t('yelloBorderContent')}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <View style={HeaderStyle.centerText}>
              <Text style={{ color: colors.white, fontSize: 30 }}>
                {headerText}
              </Text>
            </View>
          )}
          <View style={HeaderStyle.otherIcons}>
            <FontAwesome5 name="heart" size={28} color={colors.white} />
            <FontAwesome name="bell-o" size={28} color={colors.white} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

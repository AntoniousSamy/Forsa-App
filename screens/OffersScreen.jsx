import { View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header/Header";
import Axios from "axios";
import MyInput from "../components/UI/MyInput";
import BrandRetail from "../components/content/BrandRetail/BrandRetail.component";
import Card from "../components/content/Card/Card.component";
import Button from "../components/UI/Button";
import { useTranslation } from "react-i18next";
import OfferScreenStyle from "../styles/OffersScreen.style";

const OffersScreen = () => {
  const [offers, setOffers] = useState([]);
  const [activeButton, setActiveButton] = useState("Offers");
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const handleButtonPress = (btnText) => {
    setActiveButton(btnText);
  };
  const fetchOffersData = async () => {
    try {
      const response = await Axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/myoffers/"
      );

      if (response.data.results) {
        const offers = response.data.results.map((result, index) => ({
          brandId: result.brand.id,
          brandTitle: result.brand.title,
          thumbnail: result.brand.thumbnail,
          secEnTitle: result.brand.sector.title_en,
          secArTitle: result.brand.sector.title_ar,
          offerLabel: result.category.label,
          index,
        }));

        setOffers(offers);
      } else {
        console.error("No data found");
      }
    } catch (error) {
      console.error("API Error: ", error);
    }
  };

  useEffect(() => {
    fetchOffersData();

    return () => {
      console.log("Cleanup");
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={t("offers")} height={150} />
      <MyInput />
      <BrandRetail />
      <View
        style={OfferScreenStyle.buttonContainer}
      >
        <Button
          btnText={t("offers")}
          onPress={() => handleButtonPress("Offers")}
          isActive={activeButton === "Offers"}
        />
        <Button
          btnText={t("sesonalOffers")}
          onPress={() => handleButtonPress("Seasonal Offers")}
          isActive={activeButton === "Seasonal Offers"}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginBottom: "80%" }}>
          <View
            style={OfferScreenStyle.cardContainer}
          >
            {offers.map((offer) => (
              <Card
                image={offer.thumbnail}
                secTitle={
                  currentLanguage === "ar" ? offer.secArTitle : offer.secEnTitle
                }
                brandTitle={offer.brandTitle}
                offerLabel={offer.offerLabel}
                customKey={`${offer.brandId}-${offer.index}`}
                key={`${offer.brandId}-${offer.index}`}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OffersScreen;

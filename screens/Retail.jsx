import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Axios from "axios";
import Header from "../components/layout/Header/Header";
import RetailStyle from "../styles/Retail.Style";
import MyInput from "../components/UI/MyInput";
import BrandRetail from "../components/content/BrandRetail/BrandRetail.component";
import Card from "../components/content/Card/Card.component";
import { useTranslation } from "react-i18next";

const Retail = () => {
  const [brand, setBrand] = useState([]);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en"; 

  const fetchBrandImage = async () => {
    try {
      const response = await Axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/mystores/?sector=1"
      );
      if (response.data.results) {
        const Brand = response.data.results.map((result) => ({
          brandId: result.sector.id,
          background: result.thumbnail,
          enTitle: result.sector.title_en,
          arTitle: result.sector.title_ar,
          brandTitle: result.title,
        }));
        setBrand(Brand);
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("API Error: ", error);
    }
  };

  useEffect(() => {
    fetchBrandImage();
    return () => {
      console.log("Cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("brand", brand);
  }, [brand]);

  return (
    <View style={RetailStyle.container}>
      <Header headerText={t("retail")} height={150} />
      <MyInput />
      <BrandRetail />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginBottom: "85%" }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "100%",
              flex: 1,
            }}
          >
            {brand.map((result, index) => (
              <Card
                image={result.background}
                secTitle={currentLanguage === "ar" ? result.arTitle : result.enTitle}
                brandTitle={result.brandTitle}
                key={`${result.brandId}-${index}`}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Retail;

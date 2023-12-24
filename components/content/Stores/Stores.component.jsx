import { View, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import StoresStyle from "./Stores.Style";

const Stores = () => {
  const [brandImage, setBrandImage] = useState([]);

  const fetchBrandImage = async () => {
    try {
      const response = await Axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/mystores/?sector=1"
      );
      if (response.data.results) {
        const Brand = response.data.results.map((result) => ({
          brandId: result.id,
          background: result.thumbnail,
        }));
        setBrandImage(Brand);
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("API Error: ", error);
    }
  };

  useEffect(() => {
    fetchBrandImage();
  }, []);

  useEffect(() => {
    console.log("brandImage", brandImage);
  }, [brandImage]);

  const filteredBrandImage = brandImage.filter((brand) => brand.background);

  return (
    <ScrollView
      contentContainerStyle={StoresStyle.scrollDesign}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {filteredBrandImage.map((brand) => (
        <View key={brand.brandId} style={StoresStyle.container}>
          <Image
            key={brand.brandId}
            source={{ uri: brand.background }}
            style={StoresStyle.image}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Stores;

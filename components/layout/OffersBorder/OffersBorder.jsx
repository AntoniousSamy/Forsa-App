import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator, Text } from "react-native";
import Axios from "axios";
import Swiper from "react-native-swiper";
import OffersBorderStyle from './OffersBorder.Style'


const OffersBorder = () => {
  const [brandBackgrounds, setBrandBackgrounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      console.log("Before API call");
      const response = await Axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/myoffers/"
      );
      if (response.data.results) {
        const brandImages = response.data.results
          .map((result) => ({
            brandId: result.brand.id,
            background: result.brand.background,
          }))
          .filter(({ background }) => background);

        setBrandBackgrounds(brandImages);
        console.log("Brand Images:", brandImages);
      } else {
        setError("No data found");
        console.log("No data found");
      }
    } catch (error) {
      console.error("API Error: ", error);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
      console.log("After API call");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Brand Backgrounds:", brandBackgrounds);
  }, [brandBackgrounds]);

  return (
    <View style={OffersBorderStyle.container}>
      {loading && (
        <ActivityIndicator
          style={OffersBorderStyle.loader}
          size="large"
          color="#0000ff"
        />
      )}

      {error && <Text style={OffersBorderStyle.error}>{error}</Text>}
      <Swiper loop autoplay showsPagination={false}>
        {brandBackgrounds.map((brandImage) => (
          <View key={brandImage.brandId} style={OffersBorderStyle.backgroundImageContainer}>
            <Image
              source={{ uri: brandImage.background }}
              style={OffersBorderStyle.backgroundImage}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default OffersBorder;

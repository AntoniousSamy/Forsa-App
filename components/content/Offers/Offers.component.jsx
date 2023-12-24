import { View, Image, Text } from "react-native";
import OffersStyle from "./Offers.style";
import React, { useEffect, useState } from "react";
import Axios from "axios";
const Offers = () => {
  const [offers, setOffers] = useState([]);

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
    <View style={OffersStyle.container}>
      {offers.map((offer) => (
        <View
          style={OffersStyle.offerContainer}
          key={`${offer.brandId}-${offer.index}`}
        >
          <Image
            source={{ uri: offer.thumbnail }}
            style={OffersStyle.thumbnail}
          />
          <View style={OffersStyle.bottomContainer}>
            <Text style={OffersStyle.secEnTitle}>{offer.secEnTitle}</Text>
            <Text style={OffersStyle.brandTitle}>{offer.brandTitle}</Text>
            <View style={{ marginHorizontal: "10%" }}>
              <Text style={OffersStyle.offerLabel}>{offer.offerLabel}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Offers;

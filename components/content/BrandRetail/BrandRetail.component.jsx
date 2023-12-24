import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import BrandRetailStyle from "./BrandRetail.style";

const BrandRetail = () => {
  const [titles, setTitles] = useState(["All"]);
  const [selectedTitle, setSelectedTitle] = useState(0); 

  const fetchTitles = async () => {
    try {
      console.log("First");
      const response = await Axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/mysectors/"
      );
      if (response.data.results) {
        const categories = ["All", ...response.data.results.map((result) => result.label)]; 
        setTitles(categories);
      } else {
        setError("No data found");
        console.log("No data found");
      }
    } catch (error) {
      console.error("API Error: ", error);
    }
  };

  useEffect(() => {
    fetchTitles();
  }, []);

  const handleTitlePress = (index) => {
    setSelectedTitle(index);
  };

  return (
    <View style={BrandRetailStyle.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={BrandRetailStyle.catView}
      >
        {titles.map((label, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTitlePress(index)}
            style={[
              BrandRetailStyle.titleContainer,
              selectedTitle === index && BrandRetailStyle.selectedTitleContainer,
            ]}
          >
            <Text
              style={[
                BrandRetailStyle.titleStyle,
                selectedTitle === index && BrandRetailStyle.selectedTitleStyle,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BrandRetail;

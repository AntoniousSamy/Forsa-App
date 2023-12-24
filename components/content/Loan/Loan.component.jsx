import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import LoanStyle from "./Loan.style";
import colors from "../../../constants/colors";

const Loan = () => {
  const [service, setService] = useState([]);
  const borderColors = [colors.tiffanyBlue, colors.blueNCS, colors.darkblue];

  const shuffledColors = [...borderColors].sort(() => Math.random() - 0.5);

  const fetchTitles = async () => {
    try {
      const response = await Axios.get(
        "https://forsa-staging.bit68.com/api/v1/onetransaction/myservicetypes/"
      );
      if (response.data.results) {
        const serviceType = response.data.results.map((result) => ({
          egName: result.name_en,
          arName: result.name_ar,
        }));
        setService(serviceType);
      } else {
        console.log("error", error);
      }
    } catch (error) {
      console.error("API Error: ", error);
    }
  };

  useEffect(() => {
    fetchTitles();
    return () => {
      console.log("Cleanup");
    };
  }, []);

  let colorIndex = 0;

  const getNextColor = () => {
    const color = shuffledColors[colorIndex];
    colorIndex = (colorIndex + 1) % shuffledColors.length;
    return color;
  };

  return (
    <View style={LoanStyle.container}>
      {service.length > 0 ? (
        service.map((result, index) => (
          <View
            key={index}
            style={[LoanStyle.border, { backgroundColor: getNextColor() }]}
          >
            <Text style={{ color: "#fff" }}>{result.egName}</Text>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Loan;

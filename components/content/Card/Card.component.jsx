import { View, Image, Text } from "react-native";
import CardStyle from "./Card.style";
const Card = ({ image, secTitle, brandTitle, offerLabel, customKey }) => {
  return (
    <View style={CardStyle.offerContainer} key={customKey} >
      <View style={CardStyle.bottomContainer} >
        <Text style={CardStyle.secEnTitle}>{secTitle}</Text>
        <Text style={CardStyle.brandTitle}>{brandTitle}</Text>
        {offerLabel && <Text style={CardStyle.offerLabel}>{offerLabel.slice(0,35)}.....</Text>}
      </View>
      <View style={CardStyle.thumbnailContainer}>
        <Image source={{ uri: image }} style={CardStyle.thumbnail} />
      </View>
    </View>
  );
};

export default Card;

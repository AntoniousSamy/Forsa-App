import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../components/layout/Header/Header";
import OffersBorder from "../components/layout/OffersBorder/OffersBorder";
import Arrow from "../components/UI/Arrow";
import colors from "../constants/colors";
import CartSection from "../components/layout/CartSection/CartSection";
import BrandRetail from "../components/content/BrandRetail/BrandRetail.component";
import Stores from "../components/content/Stores/Stores.component";
import Loan from "../components/content/Loan/Loan.component";
import Offers from "../components/content/Offers/Offers.component";
import { useTranslation } from "react-i18next";
import HomeStyle from "../styles/Home.Style";
const Home = () => {
  const {t} = useTranslation();
  const arrowsStyle = [
    { id: 1, color: colors.moreLightGreen },
    { id: 2, color: colors.lightgreen },
    { id: 3, color: colors.green },
  ];

  const [isLoanVisible, setIsLoanVisible] = useState(true);

  const toggleLoanVisibility = () => {
    setIsLoanVisible(!isLoanVisible);
  };

  return (
    <>
      <View>
        <Header isHome={true} height={300} />
        <View
          style={HomeStyle.container}
        >
          <OffersBorder />
          <View
            style={HomeStyle.arrowsContainer}
          >
            {arrowsStyle.map((arrow) => (
              <Arrow key={arrow.id} color={arrow.color} />
            ))}
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={HomeStyle.scrollView}
        showsVerticalScrollIndicator={false}
      >

        <CartSection title={t('topBrands')} btnText={t('viewAll')}>
          <BrandRetail />
          <View style={HomeStyle.storesContainer}>
          <Stores />
        </View>
        </CartSection>
        <View style={HomeStyle.loanSection}>
          <CartSection
            title={t('requestLoan')}
            btnText={isLoanVisible ? t('seeLess') : t('seeMore')}
            onPress={toggleLoanVisibility}
          >
            {isLoanVisible && <Loan />}
          </CartSection>
        </View>
        <View style={HomeStyle.offersSection}>
          <CartSection title={t('offersSelect')} btnText={t('seeAll')}>
            <Offers />
          </CartSection>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

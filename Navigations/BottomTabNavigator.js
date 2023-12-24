import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions } from "react-native";
import CustomTabBar from "../components/UI/CustomTabBar";
import routes from "../constants/routes";
import Home from "../screens/Home";
import OffersScreen from "../screens/OffersScreen";
import Retail from "../screens/Retail";
import Profile from "../screens/Profile";
import { useTranslation } from "react-i18next";
const screenHeight = Dimensions.get("window").height;
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "blue",
      })}
    >
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarButton: (props) => (
            <CustomTabBar
              iconGrop={"Ionicons"}
              icon="home"
              label={t("home")}
              {...props}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routes.RETAIL}
        component={Retail}
        options={{
          tabBarButton: (props) => (
            <CustomTabBar
              icon="label-percent-outline"
              label={t("retail")}
              {...props}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routes.OFFERS_SCREEN}
        component={OffersScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBar
              icon="brightness-percent"
              label={t("offers")}
              {...props}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
          tabBarButton: (props) => (
            <CustomTabBar
              iconGrop={"Ionicons"}
              icon="ios-person-outline"
              label={t("profile")}
              {...props}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;
const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "#fff",
    borderTopWidth: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: screenHeight * 0.1,
  },
});

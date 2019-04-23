import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import React from "react";
import HomeScreen from "../screens/Home";
import AddWashroomScreen from "../screens/AddWashroom";
import AboutScreen from "../screens/Account";
import WashroomScreen from "../screens/Washroom";
import ReviewScreen from "../screens/Review";
import CameraScreen from "../screens/Camera";
import Icon from "react-native-vector-icons/FontAwesome5";
import GooglePlacesInput from "../components//GooglePlacesInput";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Washroom: WashroomScreen,
    Review: ReviewScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AboutStack = createSwitchNavigator(
  {
    About: AboutScreen
  },
  {
    initialRouteName: "About"
  }
);

const AddWashroomStack = createStackNavigator(
  {
    GoogleSearch: GooglePlacesInput,
    AddWashroom: AddWashroomScreen,
    Camera: CameraScreen
  },
  { initialRouteName: "GoogleSearch", headerMode: "none" }
);

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    AddWashroom: AddWashroomStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;

        let icon, color, backgroundcolor;

        if (routeName === "Home") {
          icon = "toilet";
          color = focused ? "#ff6b6b" : "#cfd2cd";
        }
        if (routeName === "About") {
          icon = "user";
          color = focused ? "#ff6b6b" : "#cfd2cd";
        }
        if (routeName === "AddWashroom") {
          icon = "plus";
          color = focused ? "#ff6b6b" : "#cfd2cd";
        }
        return (
          <Icon
            name={icon}
            size={20}
            color={color}
            backgroundColor={backgroundcolor}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: "#ff6b6b",
        inactiveTintColor: "#cfd2cd",
        labelStyle: {
          fontSize: 10
        },
        style: {
          backgroundColor: "white"
        }
      }
    })
  }
);

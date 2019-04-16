import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import React from "react";
import HomeScreen from "../screens/Home";
import AddWashroomScreen from "../screens/AddWashroom";
import AccountScreen from "../screens/Account";
import WashroomScreen from "../screens/Washroom";
import ReviewScreen from "../screens/Review";
import LoginScreen from "../screens/Login";
import AuthLoadingScreen from "../components/AuthLoading/AuthLoading";
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
    headerMode: "none"
  }
);

const AccountStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Account: AccountScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "AuthLoading"
  }
);

const AddWashroomStack = createStackNavigator(
  {
    GoogleSearch: GooglePlacesInput,
    AddWashroom: AddWashroomScreen,
    Camera: CameraScreen
  },
  {
    headerMode: "none"
  }
);

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    AddWashroom: AddWashroomStack,
    Account: AccountStack
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
        if (routeName === "Account") {
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
        activeTintColor: "#000000",
        inactiveTintColor: "#000000",
        labelStyle: {
          fontSize: 10
        },
        style: {
          backgroundColor: "#faf3dd"
        }
      }
    })
  }
);

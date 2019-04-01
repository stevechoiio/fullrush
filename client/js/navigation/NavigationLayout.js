import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import HomeScreen from "../screens/Home";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none"
  }
);

export default createBottomTabNavigator(
  {
    Home: HomeStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: "#000000",
        inactiveTintColor: "#000000",
        labelStyle: {
          fontSize: 10
        },
        style: {
          backgroundColor: "#ffffff"
        }
      }
    })
  }
);

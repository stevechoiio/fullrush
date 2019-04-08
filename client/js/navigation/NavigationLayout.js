import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import HomeScreen from "../screens/Home";
import AddWashroomScreen from "../screens/AddWashroom";
import AccountScreen from "../screens/Account";
import WashroomScreen from "../screens/Washroom";
import ReviewScreen from "../screens/Review";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Washroom: WashroomScreen,
    Review: ReviewScreen
  },
  { headerMode: "none" }
);

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen
  },
  {
    headerMode: "none"
  }
);

const AddWashroomStack = createStackNavigator(
  {
    AddWashroom: AddWashroomScreen
  },
  {
    headerMode: "none"
  }
);

export default createBottomTabNavigator(
  {
    AddWashroom: AddWashroomStack,
    Home: HomeStack,
    Account: AccountStack
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

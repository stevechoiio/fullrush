import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import React from "react";
import HomeScreen from "../screens/Home";
import RewardScreen from "../screens/Reward";
import AccountScreen from "../screens/Account";
import WashroomScreen from "../screens/Washroom";
import ReviewScreen from "../screens/Review";
import LogInScreen from "../screens/Login";
import AuthLoadingScreen from "../components/AuthLoading/AuthLoading";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Washroom: WashroomScreen,
    Review: ReviewScreen
  },
  { headerMode: "none" }
);

const AccountStack = createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Account: AccountScreen,
      LogIn: LogInScreen
    },
    {
      initialRouteName: "AuthLoading"
    }
  );

const RewardStack = createStackNavigator(
  {
    Reward: RewardScreen
  },
  {
    headerMode: "none"
  }
);

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Reward: RewardStack,
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

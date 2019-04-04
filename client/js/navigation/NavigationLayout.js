import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import HomeScreen from "../screens/Home";
import RewardScreen from "../screens/Reward";
import AccountScreen from "../screens/Account";
import WashroomScreen from "../screens/Washroom";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Washroom: WashroomScreen
  },
  {
    headerMode: "none"
  }
);

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen
  },
  {
    headerMode: "none"
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
    Reward: RewardStack,
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

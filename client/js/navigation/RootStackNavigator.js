import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import LoginScreen from "../screens/Login";
import AuthLoadingScreen from "../components/AuthLoading/AuthLoading";
const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);

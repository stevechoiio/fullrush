import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import OnboardScreen from "../screens/Onboard";
import OnboardLoading from "../components/AuthLoading/OnboardLoading";

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout
  },
  {
    headerMode: "none",
    initialRouteName: "Layout"
  }
);
export default createAppContainer(
  createSwitchNavigator(
    {
      OnboardLoading: OnboardLoading,
      App: AppStack,
      Onboard: OnboardScreen
    },
    {
      initialRouteName: "OnboardLoading"
    }
  )
);

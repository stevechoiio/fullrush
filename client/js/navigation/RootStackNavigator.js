import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import OnboardScreen from "../screens/Onboard";
import OnboardLoading from "../components/AuthLoading/OnboardLoading";
const AppStack = createStackNavigator(
  {
    OnboardLoading: OnboardLoading,
    Layout: NavigationLayout,
    Onboard: OnboardScreen
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "OnboardLoading"
  }
);

export default createAppContainer(AppStack);

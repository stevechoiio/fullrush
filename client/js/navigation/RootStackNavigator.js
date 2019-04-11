import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(AppStack);

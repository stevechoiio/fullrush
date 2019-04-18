import React from "react";
import { Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-community/async-storage";

export default props => {
  return (
    <Onboarding
      onDone={async () => {
        await AsyncStorage.setItem("onboarded", "1");
        props.navigation.navigate("Home");
      }}
      onSkip={async () => {
        await AsyncStorage.setItem("onboarded", "1");
        props.navigation.navigate("Home");
      }}
      pages={[
        {
          image: <Text style={{ fontSize: 40 }}>🚽</Text>,
          backgroundColor: "#ff6b6b",
          title: "Welcome to Loyal Flush!",
          subtitle: "the cleaniest washroom finder"
        },
        {
          backgroundColor: "#BFD7EA",

          image: <Text style={{ fontSize: 40 }}>🕵🏽‍</Text>,
          title: "Find",
          subtitle: "Look for the best washrooms around you"
        },
        {
          backgroundColor: "#ff6b6b",
          image: (
            <Text style={{ fontSize: 40 }}>
              ⭐️️️️️️️️⭐️️️️️️️️⭐️️️️️️️️⭐️️️️️️️️⭐️️️️️️️️
            </Text>
          ),
          title: "Share",
          subtitle: "Let others know about the washroom you were at"
        },
        {
          backgroundColor: "#BFD7EA",
          image: <Text style={{ fontSize: 40 }}>🏁</Text>,
          title: "Let's get started!",
          subtitle: "Sign Up/Log In/Continue without an account"
        }
      ]}
    />
  );
};

import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default class OnboardLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const onboarded = await AsyncStorage.getItem("onboarded");
    console.log(onboarded);
    this.props.navigation.navigate(onboarded ? "Home" : "Onboard");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

import React, { Component } from "react";
import { Text, View } from "react-native";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { ApolloProvider } from "react-apollo";
import { client } from "./config/api";

import SplashScreen from "react-native-splash-screen";
import { Root } from "native-base";
import firebase from "react-native-firebase";

const SideBar = () => {
  return <Text>hey</Text>;
};

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    console.log(firebase);
    return (
      <Root>
        <ApolloProvider client={client}>
          {/* <RootStackNavigator /> */}
          <View>
            <Text>testing</Text>
          </View>
        </ApolloProvider>
      </Root>
    );
  }
}

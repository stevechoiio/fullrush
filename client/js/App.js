import React, { Component } from "react";
import { Rehydrated } from "aws-appsync-react";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";
import SplashScreen from "react-native-splash-screen";
import { Root } from "native-base";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Root>
        <ApolloProvider client={client}>
          <Rehydrated>
            <RootStackNavigator />
          </Rehydrated>
        </ApolloProvider>
      </Root>
    );
  }
}

import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";
import { Drawer } from "native-base";

const SideBar = () => {
  return <Text>hey</Text>;
};
export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <ApolloProvider client={client}>
          <RootStackNavigator />
        </ApolloProvider>
      </Drawer>
    );
  }
}

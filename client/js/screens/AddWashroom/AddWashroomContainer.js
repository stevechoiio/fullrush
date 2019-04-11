import React, { Component } from "react";
import { Text } from "react-native";
import { Drawer } from "native-base";
import AddWashroom from "./AddWashroom";

export default class AddWashroomContainer extends Component {
  
  render() {
    return (
        <AddWashroom nav={this.props.navigation}/>
    );
  }
}

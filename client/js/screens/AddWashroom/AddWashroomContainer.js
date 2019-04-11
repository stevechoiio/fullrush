import React, { Component } from "react";
import AddWashroom from "./AddWashroom";

export default class AddWashroomContainer extends Component {
  
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");

    const vicinity = navigation.getParam("vicinity");
    console.log(vicinity);
    return (
      <AddWashroom
        nav={this.props.navigation}
        name={name}
        vicinity={vicinity}
      />
    );
  }
}

import React, { Component } from "react";
import AddWashroom from "./AddWashroom";

export default class AddWashroomContainer extends Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");

    const vicinity = navigation.getParam("vicinity");
    let { location } = navigation.getParam("geometry");
    const id = navigation.getParam("place_id");
    const photo = navigation.getParam("photo");
    console.log(id);
    
    return (
      <AddWashroom
        nav={this.props.navigation}
        name={name}
        vicinity={vicinity}
        location={location}
        id={id}
        photo={photo}
      />
    );
  }
}

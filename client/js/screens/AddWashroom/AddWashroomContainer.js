import React, { Component } from "react";
import AddWashroom from "./AddWashroom";

export default class AddWashroomContainer extends Component {
  render() {
    return <AddWashroom nav={this.props.navigation} />;
  }
}

import React, { Component } from "react";
import Washroom from "./Washroom";
export default class WashroomContainer extends Component {
  render() {
    return <Washroom nav={this.props.navigation} />;
  }
}

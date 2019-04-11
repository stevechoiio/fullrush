import React, { Component } from "react";
import Washroom from "./Washroom";
export default class WashroomContainer extends Component {
  render() {
    const washroomData = this.props.navigation.getParam("data");
    return <Washroom data={washroomData} nav={this.props.navigation} />;
  }
}

import React, { Component } from "react";
import Camera from "./Camera";

export default class CameraContainer extends Component {
  render() {
    return <Camera nav={this.props.navigation} />;
  }
}

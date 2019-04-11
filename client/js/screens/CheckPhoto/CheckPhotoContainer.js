import React, { Component } from "react";
import CheckPhoto from "./CheckPhoto";

export default class CheckPhotoContainer extends Component {
  render() {
    const photoData = this.props.navigation.getParam("data");
    return <CheckPhoto data={photoData} nav={this.props.navigation} />;
  }
}

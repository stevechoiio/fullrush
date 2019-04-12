import React, { Component } from "react";
import Review from "./Review";
export default class ReviewContainer extends Component {
  render() {
    const washroomData = this.props.navigation.getParam("data");
    return <Review nav={this.props.navigation} washroomData={washroomData} />;
  }
}

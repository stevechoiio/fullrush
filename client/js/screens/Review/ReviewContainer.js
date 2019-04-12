import React, { Component } from "react";
import Review from "./Review";
export default class ReviewContainer extends Component {
  render() {
    const washroomData = this.props.navigation.getParam("data");
    const refetch = this.props.navigation.getParam("refetch");
    return (
      <Review
        refetch={refetch}
        nav={this.props.navigation}
        washroomData={washroomData}
      />
    );
  }
}

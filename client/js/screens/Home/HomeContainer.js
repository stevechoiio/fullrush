import React, { Component } from "react";
import Home from "./Home";
export default class HomeConatiner extends Component {
  render() {
    return <Home nav={this.props.navigation} />;
  }
}

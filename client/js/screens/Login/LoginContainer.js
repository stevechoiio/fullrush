import React, { Component } from "react";
import Login from "./Login";
export default class LoginContainer extends Component {
  render() {
    return <Login navigation={this.props.navigation} />;
  }
}

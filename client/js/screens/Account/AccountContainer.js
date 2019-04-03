import React, { Component } from "react";
import Account from "./Account";
export default class AccountConatiner extends Component {
  render() {
    return <Account navigation={this.props.navigation} />;
  }
}

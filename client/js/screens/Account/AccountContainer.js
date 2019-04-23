import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import About from "../About";
import { Header } from "react-native-elements";
import { Container } from "native-base";

export default class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }
  componentDidMount = async () => {
    let id = await AsyncStorage.getItem("id");
    this.setState({ id });
  };
  render() {
    return (
      <Container
        style={{
          background: "linear-gradient(to right bottom, #430089, #82ffa1)"
        }}
      >
        <Header
          containerStyle={{
            backgroundColor: "#ff6b6b",
            justifyContent: "space-around"
          }}
          statusBarProps={{ barStyle: "light-content" }}
          centerComponent={{
            text: "Loyal Flush",
            style: { color: "#fff", fontSize: 20 }
          }}
        />
        <Container
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <About />
        </Container>
      </Container>
    );
  }
}

import React, { Component } from "react";
import { Card, CardItem, Body } from "native-base";
import { Text } from "react-native";
export default class About extends Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Text>Loyal Flush</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              Loyal Flush is a Crowd-Sourced Multi-Platform Mobile Application
              that finds you the cleanest washroom around, hand-picked by honest
              users.
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>©Loyal Flush</Text>
        </CardItem>
      </Card>
    );
  }
}

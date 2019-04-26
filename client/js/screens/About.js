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
              Loyal Flush is a crowd-sourced Public Washroom Information App. It
              allows users to locate and share their opinions on public
              washrooms. Furthermore, active users can rate each washroom on how
              clean the washroom is. It also provides details and
              auto-navigation to the closest or chosen washroom. Make a clean
              flush with Loyal Flush, your loyal washroom locator!
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

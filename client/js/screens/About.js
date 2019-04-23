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
              our app does this that those and these for these reasons
              blahbalhasd clena washroom finding yesyesyes
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>@copyright loyalflush</Text>
        </CardItem>
      </Card>
    );
  }
}

import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionExample extends Component {
  render() {
    return (
      <Accordion
        renderHeader={() => {
          return <Text>test</Text>;
        }}
        renderContent={() => {
          return <Text>content</Text>;
        }}
        dataArray={dataArray}
        expanded={0}
      />
    );
  }
}

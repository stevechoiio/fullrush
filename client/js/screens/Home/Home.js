import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Button,
  Body
} from "native-base";

let sampleWashroom = {
  id: "01010101",
  name: "Sample Washroom",
  stall: 3,
  building: "BCIT",
  listofReviews: [],
  overallRating: 3,
  instruction: "Try using dyson"
};

let sampleWashroom2 = {
  id: "1425",
  name: "Sample Washroom2",
  stall: 5,
  building: "SFU",
  listofReviews: [],
  overallRating: 4,
  instruction: "Dyson is awesome"
};

const Home = ({ data, nav }) => {
  return (
    <Container borderColor="#000000">
      <Header />
      <Content>
        <List>
          <ListItem
            thumbnail
            TouchableOpacity
            onPress={() => nav.navigate("Washroom")}
          >
            <Left>
              <Thumbnail square source={{ uri: "Image URL" }} />
            </Left>
            <Body>
              <Text>
                {/* Show Washroom Name HERE*/}
                {sampleWashroom.name}
              </Text>
              <Text note numberOfLines={1}>
                {/* Show Address or major detail here */}
                {sampleWashroom.instruction}
              </Text>
            </Body>
            <Right>
              <Text>
                {/* Washroom Rating goes here! */}
                {sampleWashroom.overallRating}
              </Text>
            </Right>
          </ListItem>
          <ListItem
            thumbnail
            TouchableOpacity
            onPress={() => nav.navigate("Washroom")}
          >
            <Left>
              <Thumbnail square source={{ uri: "Image URL" }} />
            </Left>
            <Body>
              <Text>
                {/* Show Washroom Name HERE*/}
                {sampleWashroom2.name}
              </Text>
              <Text note numberOfLines={1}>
                {/* Show Address or major detail here */}
                {sampleWashroom2.instruction}
              </Text>
            </Body>
            <Right>
              <Text>
                {/* Washroom Rating goes here! */}
                {sampleWashroom2.overallRating}
              </Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Home;

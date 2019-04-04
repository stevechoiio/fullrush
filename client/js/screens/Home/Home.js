import React, { Component } from "react";
import styles from "./styles";
import { Container, 
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

const Home = ({data}) => {
  return(
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: 'Image URL'}}/>
            </Left>
            <Body>
              <Text>
                {/* Show Washroom Name HERE*/}
                Washroom Name
              </Text>
              <Text note numberOfLines={1}>
                {/* Show Address or major detail here */}
                Major Detail!
              </Text>
            </Body>
            <Right>
              <Text>
                {/* Washroom Rating goes here! */}
                4
              </Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Home;
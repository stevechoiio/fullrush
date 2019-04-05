import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
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
  listOfPhotos: ["https://dummyimage.com/600x400/000/fff"],
  overallRating: 3,
  instruction: "Try using dyson"
};

let sampleWashroom2 = {
  id: "1425",
  name: "Sample Washroom2",
  stall: 5,
  building: "SFU",
  listOfReviews: [],
  listOfPhotos: ["https://dummyimage.com/600x400/000/fff"],
  overallRating: 4,
  instruction: "Dyson is awesome"
};

let sampleWashrooms = [sampleWashroom, sampleWashroom2];

const Home = ({data, nav}) => {
  return(
    <Container>
      <Header />
      <Content>
        <List>
          {sampleWashrooms.map((item, key) => (
            <ListItem  
              key={key}
              washroom={item} 
              TouchableOpacity onPress={() => nav.navigate("Washroom")}
              thumbnail>
              <Left>
                {/* Map ListOfPhotos here as Thumbnail */}
                <Thumbnail square source={{uri: item.listOfPhotos[0]}}/>
              </Left>
              <Body>
                <Text>
                  {/* Here comes the Washroom name */}
                {item.name}
                </Text>
                <Text note numberOfLines={1}>
                {/* Here comes the instruction of the washroom */}
                {item.instruction}
                </Text>
              </Body>
              <Right>
                <Text>
                  {/* Here comes the OverallRating */}
                  {item.overallRating}
                </Text>
              </Right>
              </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Home;

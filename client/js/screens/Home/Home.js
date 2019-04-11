import React, { Component } from "react";
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

let defaultImage = "https://dummyimage.com/600x400/000/fff";
  // This is the default placeholder image

// Let a Default Placeholder be on Thumbnail when url || Photos is empty
let foo = (item) => {
  if (item == null) {
    return defaultImage;
  } else {
    return item.url;
  }
};

const Home = ({data, nav}) => {
  return(
    <Container>
      <Header />
      <Content>
        <List>
          {data.map((item, key) => (
            <ListItem
              key={key}
              washroom={item}
              TouchableOpacity onPress={() => nav.navigate("Washroom")}
              thumbnail>
              <Left>
                {/* Map ListOfPhotos here as Thumbnail */}
                <Thumbnail square source={{uri: foo(item.listOfPhotos)}}/>
                  {/* //item.listOfPhotos.url}}/> */}
                {/* //source={{uri: item.listOfPhotos[0]}}/> */}
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

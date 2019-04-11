import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import { RefreshControl } from "react-native";
import { Header } from "react-native-elements";

let defaultImage = "https://dummyimage.com/600x400/000/fff";
// This is the default placeholder image

// Let a Default Placeholder be on Thumbnail when url || Photos is empty
let foo = item => {
  if (item == null) {
    return defaultImage;
  } else {
    return item.url;
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.refetch().then(() => {
      this.setState({ refreshing: false });
    });
  };
  render() {
    let { nav, data } = this.props;
    console.log(this.props.refetch);
    return (
      <Container>
        <Header
          centerComponent={{
            text: "Washrooms Nearby",
            style: { color: "#fff", fontSize: 20 }
          }}
        />
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          dataArray={this.props.contacts}
          renderRow={row => <Row row={row} />}
        >
          <List>
            {data.map((item, key) => (
              <ListItem
                key={key}
                washroom={item}
                TouchableOpacity
                onPress={() => nav.navigate("Washroom", { data: item })}
                thumbnail
              >
                <Left>
                  {/* Map ListOfPhotos here as Thumbnail */}
                  <Thumbnail square source={{ uri: foo(item.listOfPhotos) }} />
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
  }
}

export default Home;

import React, { Component } from "react";
import {
  View,
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
import { RefreshControl, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import geolib from "geolib";
import { ActionSheet } from "native-base";
import StarRating from "react-native-star-rating";
import { material } from "react-native-typography";
import Icon from "react-native-vector-icons/FontAwesome5";
import Map from "../../components/Map";
import getDirections from "react-native-google-maps-directions";
let defaultImage = "https://dummyimage.com/600x400/000/fff";

var BUTTONS = ["Distance", "Rating", "Cancel"];
var DESTRUCTIVE_INDEX = 2;
let checkForPhoto = item => {
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
      refreshing: false,
      filterDistance: true
    };
  }
  handleGetDirections = async (lat, long) => {
    await navigator.geolocation.getCurrentPosition(pos => {
      var crd = pos.coords;
      const data = {
        source: {
          latitude: crd.latitude,
          longitude: crd.longitude
        },
        destination: {
          latitude: lat,
          longitude: long
        },
        params: [
          {
            key: "travelmode",
            value: "walking"
          },
          {
            key: "dir_action",
            value: "navigate"
          }
        ]
      };

      getDirections(data);
    });
  };
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.refetch().then(() => {
      this.setState({ refreshing: false });
    });
  };
  originalPosition = height => {
    return height == 150 ? "100%" : 150;
  };
  render() {
    let { nav, data, location } = this.props;
    console.log(data);
    return (
      <Container style={{ backgroundColor: "#d3d3d3" }}>
        <Header
          containerStyle={{
            backgroundColor: "#ff6b6b",
            justifyContent: "space-around"
          }}
          statusBarProps={{ barStyle: "light-content" }}
          rightComponent={
            <TouchableOpacity
              onPress={() => {
                this.handleGetDirections(
                  data[0].locationLat,
                  data[0].locationLong
                );
              }}
            >
              <Icon
                style={{ marginRight: 5 }}
                name={"running"}
                size={25}
                color={"white"}
              />
            </TouchableOpacity>
          }
          centerComponent={<Icon name={"restroom"} size={25} color={"white"} />}
          leftComponent={
            <TouchableOpacity
              onPress={() => {
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Sort by:"
                  },
                  () => {
                    this.setState({
                      filterDistance: !this.state.filterDistance
                    });
                    console.log(this.state.filterDistance);
                  }
                );
              }}
            >
              <Icon name={"sliders-h"} size={25} color={"white"} />
            </TouchableOpacity>
          }
        />
        <Map
          location={location}
          washrooms={data}
          originalPosition={this.originalPosition}
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
          <List style={{ marginTop: 10 }}>
            {data.map((item, key) => (
              <ListItem
                key={key}
                washroom={item}
                TouchableOpacity
                onPress={() => nav.navigate("Washroom", { data: item })}
                thumbnail
                style={{
                  borderRadius: 5,
                  borderColor: "white",
                  borderStyle: "solid",
                  backgroundColor: "white",
                  height: 70,
                  marginBottom: 5,
                  marginLeft: 0
                }}
              >
                <Left>
                  {/* Map ListOfPhotos here as Thumbnail */}
                  <Thumbnail
                    square
                    source={{ uri: checkForPhoto(item.listOfPhotos) }}
                  />
                  {/* //item.listOfPhotos.url}}/> */}
                  {/* //source={{uri: item.listOfPhotos[0]}}/> */}
                </Left>
                {console.log(item)}
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
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={item.overallRating}
                    starSize={12}
                    halfStarColor="#FFDF00"
                    emptyStarColor="#FFDF00"
                    fullStarColor="#FFDF00"
                  />
                  <Text style={material.caption}>
                    {geolib.getDistance(
                      { latitude: location.lat, longitude: location.long },
                      {
                        latitude: item.locationLat,
                        longitude: item.locationLong
                      }
                    )}
                    M
                  </Text>
                  {item.toiletSeater ? (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center"
                      }}
                    >
                      <Icon name={"toilet"} size={12} color={"#d3d3d3"} />
                    </View>
                  ) : null}
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

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { material } from "react-native-typography";
import StarRating from "react-native-star-rating";
import getDirections from "react-native-google-maps-directions";
import Icon from "react-native-vector-icons/FontAwesome";
import { Header } from "react-native-elements";
import BackButton from "../../components/BackButton";
import {
  Accordion,
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body,
  Image
} from "native-base";

const handleGetDirections = async (lat, long) => {
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

let defaultImage = "https://dummyimage.com/600x400/000/fff";
let checkForPhoto = item => {
  if (item == null) {
    return defaultImage;
  } else {
    return item.url;
  }
};

export default ({ reviews, refetch, data, nav }) => {
  return (
    <View>
      <Header
        containerStyle={{
          backgroundColor: "#ff6b6b",
          justifyContent: "space-around"
        }}
        statusBarProps={{ barStyle: "light-content" }}
        leftComponent={<BackButton />}
        centerComponent={{
          text: data.name,
          style: { color: "#fff", fontSize: 15 }
        }}
      />

      {/* <Thumbnail square source={{ uri: foo(item.listOfPhotos) }} /> */}
      {/* <Image source={{uri: checkForPhoto(data.listOfPhotos)}}></Image> */}
      <Thumbnail square source={{ uri: checkForPhoto(data.listOfPhotos) }} />
      <Text style={material.caption}>{data.address}</Text>

      <StarRating disabled={true} maxStars={5} rating={data.overallRating} />
      <View style={{ flex: 0, flexDirection: "row" }}>
        <Text>Toilet Seat covers</Text>
        <Icon name="check" size={15} color="black" />
      </View>
      <Text>2 stalls</Text>
      <Text style={material.title}>Most Recent Review:</Text>
      <ListItem>
        <Left>
          {reviews.allReviews[0] ? (
            <Text style={material.caption}>
              {reviews.allReviews[0].user.name}
            </Text>
          ) : (
            <Text style={material.caption}>Bob</Text>
          )}
        </Left>
        <Body>
          <Text>not bad</Text>
        </Body>
        <Right>
          <StarRating
            disabled={true}
            starSize={5}
            maxStars={5}
            rating={reviews.allReviews[0] ? reviews.allReviews[0].rating : 5}
          />
        </Right>
      </ListItem>

      <Accordion
        renderHeader={() => {
          return (
            <Text style={material.subheading}>
              see more reviews ({reviews.allReviews.length})
            </Text>
          );
        }}
        renderContent={() => {
          return (
            <List>
              {reviews.allReviews ? (
                reviews.allReviews.map((review, index) => {
                  return (
                    <ListItem key={index}>
                      <Left>
                        {review.user ? (
                          <Text style={material.caption}>
                            {review.user.name}
                          </Text>
                        ) : null}
                      </Left>
                      <Body>
                        <Text>Jesus's love is here</Text>
                      </Body>
                      <Right>
                        <StarRating
                          disabled={true}
                          starSize={5}
                          maxStars={5}
                          rating={review.rating}
                        />
                      </Right>
                    </ListItem>
                  );
                })
              ) : (
                <View />
              )}
            </List>
          );
        }}
        dataArray={[{ title: 0, content: 0 }]}
        expanded={-1}
      />

      <TouchableOpacity
        style={{ backgroundColor: "#BFD7EA", alignItems: "center" }}
        onPress={() => handleGetDirections(data.locationLat, data.locationLong)}
        title="direction"
      >
        <Text>direction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          nav.navigate("Review", { refetch, data });
        }}
        style={{ backgroundColor: "#BFD7EA", alignItems: "center" }}
      >
        <Text>Review</Text>
      </TouchableOpacity>
    </View>
  );
};

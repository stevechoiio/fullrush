import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { material } from "react-native-typography";
import StarRating from "react-native-star-rating";
import getDirections from "react-native-google-maps-directions";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Header } from "react-native-elements";
import BackButton from "../../components/BackButton";
import {
  Accordion,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body
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
    <View style={{ flex: 1 }}>
      <Header
        containerStyle={{
          backgroundColor: "#ff6b6b",
          justifyContent: "space-around"
        }}
        statusBarProps={{ barStyle: "light-content" }}
        leftComponent={<BackButton />}
        centerComponent={{
          text: data.name,
          style: { color: "#fff", fontSize: 20 }
        }}
        rightComponent={
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() =>
              handleGetDirections(data.locationLat, data.locationLong)
            }
          >
            <Icon name={"walking"} size={25} color={"white"} />
          </TouchableOpacity>
        }
      />

      <View
        style={{
          alignItems: "center",
          height: "30%",
          justifyContent: "space-evenly"
        }}
      >
        <Text style={{ ...material.caption, marginTop: 10 }}>
          {data.address}
        </Text>
        {/* <Thumbnail square source={{ uri: foo(item.listOfPhotos) }} /> */}
        {/* <Image source={{uri: checkForPhoto(data.listOfPhotos)}}></Image> */}
        <Thumbnail square source={{ uri: checkForPhoto(data.listOfPhotos) }} />
        <StarRating
          disabled={true}
          maxStars={5}
          rating={data.overallRating}
          halfStarColor="#FFDF00"
          emptyStarColor="#FFDF00"
          fullStarColor="#FFDF00"
        />
        <View style={{ flex: 0, flexDirection: "row" }}>
          <Text>Toilet Seat covers</Text>
          <Icon name="check" size={15} color="black" />
        </View>
        <Text>2 stalls</Text>
      </View>
      <View style={{ margin: 5 }}>
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
              halfStarColor="#FFDF00"
              emptyStarColor="#FFDF00"
              fullStarColor="#FFDF00"
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
                            halfStarColor="#FFDF00"
                            emptyStarColor="#FFDF00"
                            fullStarColor="#FFDF00"
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
        <View
          style={{
            alignItems: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity
              style={{
                margin: 3,
                backgroundColor: "#ff6b6b",
                alignItems: "center",
                justifyContent: "center",
                width: "40%",
                height: 70,
                borderRadius: 13
              }}
              onPress={() =>
                handleGetDirections(data.locationLat, data.locationLong)
              }
            >
              <Icon name={"map-marker-alt"} size={25} color={"white"} />
              <Text style={{ ...material.title, color: "white" }}>
                Direction
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 3,
                backgroundColor: "#BFD7EA",
                alignItems: "center",
                justifyContent: "center",
                width: "40%",
                height: 70,
                borderRadius: 13
              }}
              onPress={() => {
                nav.navigate("Review", { refetch, data });
              }}
            >
              <Icon name={"search-location"} size={25} color={"white"} />
              <Text style={{ ...material.title, color: "white" }}>Review</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 30
            }}
            onPress={() => {}}
          >
            <Text style={{ ...material.caption, color: "#BFD7EA" }}>
              Is the infromation incorrect?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

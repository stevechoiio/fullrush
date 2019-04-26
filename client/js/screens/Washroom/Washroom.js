import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { material } from "react-native-typography";
import StarRating from "react-native-star-rating";
import getDirections from "react-native-google-maps-directions";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Header } from "react-native-elements";
import BackButton from "../../components/BackButton";
import { Container } from "native-base";
import { Col, Grid } from "react-native-easy-grid";
import { Accordion, List, ListItem, Right, Body } from "native-base";
import email from "react-native-email";

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

sendEmail = async washroomName => {
  const to = ["jinsukkim94@gmail.com", "stevechoi93@gmail.com"];
  email(to, {
    subject: "Info on this washroom is wrong : " + washroomName,
    body: "Hey, I have found an error in the washroom details."
  }).catch(console.error);
};

export default ({ reviews, refetch, data, nav }) => {
  return (
    <Container>
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
            style={{ marginRight: 5 }}
            onPress={() =>
              handleGetDirections(data.locationLat, data.locationLong)
            }
          >
            <Icon name={"walking"} size={25} color={"white"} />
          </TouchableOpacity>
        }
      />
      <Grid>
        <Col style={{ alignItems: "center", height: "80%" }}>
          <Text style={{ ...material.caption, marginBottom: 5 }}>
            {data.address}
          </Text>
          {/* <Thumbnail square source={{ uri: foo(item.listOfPhotos) }} /> */}
          {/* <Image source={{uri: checkForPhoto(data.listOfPhotos)}}></Image> */}
          {/* <Thumbnail
            square
            source={{ uri: checkForPhoto(data.listOfPhotos) }}
          /> */}
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

          <View style={{ margin: 5 }}>
            <Text style={material.title}>Most Recent Review:</Text>
            <ListItem>
              {console.log(reviews.allReviews[0])}
              <Body>
                <Text>
                  {reviews.allReviews[0] && reviews.allReviews[0].comment}
                </Text>
              </Body>
              <Right>
                <StarRating
                  disabled={true}
                  starSize={5}
                  maxStars={5}
                  rating={
                    (reviews.allReviews[0] && reviews.allReviews[0].rating) || 0 // Edit this too
                  }
                  halfStarColor="#FFDF00"
                  emptyStarColor="#FFDF00"
                  fullStarColor="#FFDF00"
                />
              </Right>
            </ListItem>
            <Accordion
              style={{ borderColor: "white" }}
              renderHeader={() => {
                return (
                  <Text style={material.subheading}>
                    see more reviews (
                    {reviews.allReviews.length === 0
                      ? 0
                      : reviews.allReviews.length - 1}
                    )
                  </Text>
                );
              }}
              renderContent={() => {
                return (
                  <List>
                    {reviews.allReviews &&
                      reviews.allReviews.map((review, index) => {
                        if (index > 0) {
                          return (
                            <ListItem key={index}>
                              <Body>
                                <Text>{review.comment}</Text>
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
                        }
                      })}
                  </List>
                );
              }}
              dataArray={[{ title: 0, content: 0 }]}
              expanded={-1}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  margin: 3,
                  backgroundColor: "#ff6b6b",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40%",
                  height: 50,
                  borderRadius: 13
                }}
                onPress={() =>
                  handleGetDirections(data.locationLat, data.locationLong)
                }
              >
                <Icon name={"search-location"} size={14} color={"white"} />
                <Text style={{ ...material.title, color: "white" }}>
                  directions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  margin: 3,
                  backgroundColor: "#BFD7EA",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40%",
                  height: 55,
                  borderRadius: 13
                }}
                onPress={() => {
                  nav.navigate("Review", { refetch, data });
                }}
              >
                <Icon name={"star"} size={14} color={"white"} />
                <Text style={{ ...material.title, color: "white" }}>
                  review
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 40
              }}
              onPress={() => this.sendEmail(data.name)}
            >
              <Text
                style={{
                  ...material.caption,
                  color: "#ff6b6b",
                  textDecorationLine: "underline"
                }}
              >
                Is the Information Incorrect?
              </Text>
            </TouchableOpacity>
          </View>
        </Col>
      </Grid>
    </Container>
  );
};

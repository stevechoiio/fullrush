import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { material } from "react-native-typography";
import { Header } from "react-native-elements";
import { Item, Input, Label } from "native-base";
import StarRating from "react-native-star-rating";
import { graphql, compose } from "react-apollo";
import Icon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-community/async-storage";
import {
  ADD_REVIEW,
  UPDATE_WASHROOM_RATING,
  GET_ALL_WASHROOMS,
  GET_REVIEWS_FOR_WASHROOM
} from "../../config/queries";
import BackButton from "../../components/BackButton";
class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    };
  }
  componentDidMount = async () => {
    AsyncStorage.getItem("id").then(userId => {
      this.setState({ userId });
    });
  };
  onStarRatingPress(rating, criteria) {
    this.setState({
      [criteria]: rating
    });
  }

  render() {
    let { add_review, update_washroom_rating } = this.props;
    let overallRating, numberOfReviews;
    if (this.props.washroomData) {
      overallRating = this.props.washroomData.overallRating;
      numberOfReviews = this.props.washroomData.numberOfReviews;
    } else {
      overallRating = 0;
      numberOfReviews = 0;
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View behavior="padding">
          <View style={{ width: "100%", height: "100%" }}>
            <Header
              containerStyle={{
                backgroundColor: "#ff6b6b",
                justifyContent: "space-around"
              }}
              statusBarProps={{ barStyle: "light-content" }}
              leftComponent={<BackButton />}
              centerComponent={{
                text: "Leave a Review!",
                style: { color: "#fff", fontSize: 20 }
              }}
              rightComponent={() => {
                return (
                  <TouchableOpacity>
                    <Icon
                      style={{ marginRight: 10 }}
                      name={"check"}
                      size={20}
                      color={"white"}
                    />
                  </TouchableOpacity>
                );
              }}
            />
            <KeyboardAwareScrollView
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled={false}
            >
              <View>
                <View
                  style={{
                    marginLeft: 40,
                    marginRight: 40,
                    justifyContent: "center",
                    padding: 10
                  }}
                >
                  <Text style={material.headline}>How was the...</Text>
                  <View>
                    <Text style={material.body1}>Lighting?</Text>
                    <StarRating
                      disabled={false}
                      emptyStar={"ios-star-outline"}
                      fullStar={"ios-star"}
                      halfStar={"ios-star-half"}
                      iconSet={"Ionicons"}
                      maxStars={5}
                      rating={this.state.light}
                      selectedStar={rating =>
                        this.onStarRatingPress(rating, "light")
                      }
                      halfStarColor="#FFDF00"
                      emptyStarColor="#FFDF00"
                      fullStarColor="#FFDF00"
                    />
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={material.body1}>Ease of access?</Text>
                    <StarRating
                      disabled={false}
                      emptyStar={"ios-star-outline"}
                      fullStar={"ios-star"}
                      halfStar={"ios-star-half"}
                      iconSet={"Ionicons"}
                      maxStars={5}
                      rating={this.state.ease}
                      selectedStar={rating =>
                        this.onStarRatingPress(rating, "ease")
                      }
                      halfStarColor="#FFDF00"
                      emptyStarColor="#FFDF00"
                      fullStarColor="#FFDF00"
                    />
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={material.body1}>Toilet?</Text>
                    <StarRating
                      disabled={false}
                      emptyStar={"ios-star-outline"}
                      fullStar={"ios-star"}
                      halfStar={"ios-star-half"}
                      iconSet={"Ionicons"}
                      maxStars={5}
                      rating={this.state.toilet}
                      selectedStar={rating =>
                        this.onStarRatingPress(rating, "toilet")
                      }
                      halfStarColor="#FFDF00"
                      emptyStarColor="#FFDF00"
                      fullStarColor="#FFDF00"
                    />
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={material.body1}>Drying method?</Text>
                    <StarRating
                      disabled={false}
                      emptyStar={"ios-star-outline"}
                      fullStar={"ios-star"}
                      halfStar={"ios-star-half"}
                      iconSet={"Ionicons"}
                      maxStars={5}
                      rating={this.state.drying}
                      selectedStar={rating =>
                        this.onStarRatingPress(rating, "drying")
                      }
                      halfStarColor="#FFDF00"
                      emptyStarColor="#FFDF00"
                      fullStarColor="#FFDF00"
                    />
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={material.body1}>Sink?</Text>
                    <StarRating
                      disabled={false}
                      emptyStar={"ios-star-outline"}
                      fullStar={"ios-star"}
                      halfStar={"ios-star-half"}
                      iconSet={"Ionicons"}
                      maxStars={5}
                      rating={this.state.sink}
                      selectedStar={rating =>
                        this.onStarRatingPress(rating, "sink")
                      }
                      halfStarColor="#FFDF00"
                      emptyStarColor="#FFDF00"
                      fullStarColor="#FFDF00"
                    />
                  </View>

                  <Item floatingLabel style={{ margin: 10 }}>
                    <Label style={material.body1}>Add comments</Label>
                    <Input maxLength={50} />
                  </Item>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      margin: 3,
                      backgroundColor: "#BFD7EA",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "80%",
                      height: 40,
                      borderRadius: 13
                    }}
                    onPress={async () => {
                      let stateCopy = { ...this.state };
                      delete stateCopy.userId;
                      let total =
                        Object.values(stateCopy).reduce((a, b) => a + b) / 5;

                      let reviewID = await add_review({
                        variables: {
                          userId: this.state.userId,
                          washroomId: this.props.washroomData.id,
                          rating: total,
                          lightRating: this.state.light,
                          dryingRating: this.state.drying,
                          toiletRating: this.state.toilet,
                          sinkRating: this.state.sink,
                          easeRating: this.state.ease,
                          comment: "none",
                          placeId: this.props.washroomData.placeId
                        }
                      });
                      let newOverall =
                        (overallRating * numberOfReviews + total) /
                        (numberOfReviews + 1);
                      console.log(newOverall);
                      let updateID = await update_washroom_rating({
                        variables: {
                          id: this.props.washroomData.id,
                          overallRating: newOverall,
                          numberOfReviews: numberOfReviews + 1
                        },
                        refetchQueries: [
                          {
                            query: GET_ALL_WASHROOMS
                          },
                          {
                            query: GET_REVIEWS_FOR_WASHROOM,
                            variables: {
                              placeId: this.props.washroomData.placeId
                            }
                          }
                        ]
                      });

                      this.props.nav.navigate("Home");
                    }}
                  >
                    <Text style={{ ...material.title, color: "white" }}>
                      <Icon name={"check"} size={20} color={"white"} /> Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default compose(
  graphql(ADD_REVIEW, { name: "add_review" }),
  graphql(UPDATE_WASHROOM_RATING, { name: "update_washroom_rating" })
)(Review);

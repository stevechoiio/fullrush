import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { material } from "react-native-typography";
import { Header, Overlay, Button } from "react-native-elements";
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
      userId: null,
      alert: false
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
  addReview = async () => {
    const {
      washroomData,
      add_review,
      update_washroom_rating,
      nav
    } = this.props;
    let overallRating, numberOfReviews;
    if (washroomData) {
      overallRating = washroomData.overallRating;
      numberOfReviews = washroomData.numberOfReviews;
    } else {
      overallRating = 0;
      numberOfReviews = 0;
    }
    this.setState({ alert: true });
    let stateCopy = { ...this.state };
    delete stateCopy.userId;
    let total = Object.values(stateCopy).reduce((a, b) => a + b) / 5;
    console.log("alert has popped up")
    let reviewID = await add_review({
      variables: {
        userId: this.state.userId,
        washroomId: washroomData.id,
        rating: total,
        lightRating: this.state.light,
        dryingRating: this.state.drying,
        toiletRating: this.state.toilet,
        sinkRating: this.state.sink,
        easeRating: this.state.ease,
        comment: "none",
        placeId: washroomData.placeId
      }
    });
    let newOverall =
      (overallRating * numberOfReviews + total) / (numberOfReviews + 1);

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
            placeId: washroomData.placeId
          }
        }
      ]
    });

    this.setState({ alert: false });
    console.log("Try this");
    nav.navigate("Home");
  };
  render() {
    let { add_review, update_washroom_rating } = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View behavior="padding">
          <Overlay
            isVisible={this.state.alert}
            onBackdropPress={() => this.setState({ alert: false })}
            overlayStyle={{ borderRadius: 20 }}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
            height="35%"
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20
              }}
            >
              <Icon name={"check-circle"} size={70} color={"#ff6b6b"} />
              <Text style={{ ...material.headline, margin: 20 }}>
                Thank you!
              </Text>
            </View>
          </Overlay>
          <View style={{ flex: 0, justifyContent: "space-between" }}>
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
                  <TouchableOpacity onPress={this.addReview}>
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
              <View style={{ flex: 0, justifyContent: "flex-end" }}>
                <View
                  style={{
                    marginLeft: 40,
                    marginRight: 40,
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
                    onPress={this.addReview}
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

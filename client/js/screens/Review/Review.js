import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput
} from "react-native";
import { Button, Header } from "react-native-elements";
import { Item, Input, Label } from "native-base";
import StarRating from "react-native-star-rating";
import { graphql, compose } from "react-apollo";
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
        <View>
          <Header
            leftComponent={<BackButton />}
            centerComponent={{
              text: "Leave a Review!",
              style: { color: "#fff", fontSize: 20 }
            }}
            rightComponent={() => {
              return (
                <TouchableOpacity>
                  <Text style={{ color: "#fff" }}>Submit</Text>
                </TouchableOpacity>
              );
            }}
          />
          <Text>How did you like the washroom's...</Text>
          <Text>Lighting?</Text>
          <StarRating
            disabled={false}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            halfStar={"ios-star-half"}
            iconSet={"Ionicons"}
            maxStars={5}
            rating={this.state.light}
            selectedStar={rating => this.onStarRatingPress(rating, "light")}
            fullStarColor={"black"}
          />
          <Text>Ease of access?</Text>
          <StarRating
            disabled={false}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            halfStar={"ios-star-half"}
            iconSet={"Ionicons"}
            maxStars={5}
            rating={this.state.ease}
            selectedStar={rating => this.onStarRatingPress(rating, "ease")}
            fullStarColor={"black"}
          />
          <Text>Toilet?</Text>
          <StarRating
            disabled={false}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            halfStar={"ios-star-half"}
            iconSet={"Ionicons"}
            maxStars={5}
            rating={this.state.toilet}
            selectedStar={rating => this.onStarRatingPress(rating, "toilet")}
            fullStarColor={"black"}
          />
          <Text>Drying method?</Text>
          <StarRating
            disabled={false}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            halfStar={"ios-star-half"}
            iconSet={"Ionicons"}
            maxStars={5}
            rating={this.state.drying}
            selectedStar={rating => this.onStarRatingPress(rating, "drying")}
            fullStarColor={"black"}
          />
          <Text>Sink?</Text>
          <StarRating
            disabled={false}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            halfStar={"ios-star-half"}
            iconSet={"Ionicons"}
            maxStars={5}
            rating={this.state.sink}
            selectedStar={rating => this.onStarRatingPress(rating, "sink")}
            fullStarColor={"black"}
          />

          <Item floatingLabel>
            <Label>Add comments</Label>
            <Input maxLength={50} />
          </Item>

          <Button
            onPress={async () => {
              let stateCopy = { ...this.state };
              delete stateCopy.userId;
              let total = Object.values(stateCopy).reduce((a, b) => a + b) / 5;

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
                    variables: { placeId: this.props.washroomData.placeId }
                  }
                ]
              });

              this.props.nav.navigate("Home");
            }}
            title="Submit"
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default compose(
  graphql(ADD_REVIEW, { name: "add_review" }),
  graphql(UPDATE_WASHROOM_RATING, { name: "update_washroom_rating" })
)(Review);

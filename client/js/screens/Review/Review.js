import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Button, Header } from "react-native-elements";
import StarRating from "react-native-star-rating";
import { graphql, compose } from "react-apollo";
import AsyncStorage from "@react-native-community/async-storage";
import {
  ADD_REVIEW,
  UPDATE_WASHROOM_RATING,
  GET_ALL_WASHROOMS,
  GET_REVIEWS_FOR_WASHROOM
} from "../../config/queries";
import Spinner from "react-native-number-spinner";
import BackButton from "../../components/BackButton";
class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3,
      stallCorrect: true,
      num: null,
      hasSeater: false,
      userId: null
    };
  }
  componentDidMount = async () => {
    this.setState({ num: 3 });
    AsyncStorage.getItem("id").then(userId => {
      this.setState({ userId });
    });
  };
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    let { add_review, update_washroom_rating } = this.props;

    let { overallRating, numberOfReviews } = this.props.washroomData;

    return (
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
        <Text>How Clean was it?</Text>
        <StarRating
          disabled={false}
          emptyStar={"ios-star-outline"}
          fullStar={"ios-star"}
          halfStar={"ios-star-half"}
          iconSet={"Ionicons"}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={rating => this.onStarRatingPress(rating)}
          fullStarColor={"black"}
        />

        <Text>were there 2 stalls?</Text>
        <Button
          title={"👍"}
          type={!this.state.stallCorrect ? "clear" : "solid"}
          onPress={() => {
            this.setState({ stallCorrect: true });
          }}
        />
        <Button
          title="👎"
          type={this.state.stallCorrect ? "clear" : "solid"}
          onPress={() => {
            this.setState({ stallCorrect: false });
          }}
        />
        {!this.state.stallCorrect ? (
          <Spinner
            max={10}
            min={0}
            color="#f60"
            value={this.state.num}
            numColor="black"
            onNumChange={num => {
              this.setState({ num });
            }}
          />
        ) : null}
        <Text>were there toilet seaters?</Text>
        <Button
          title="👍"
          onPress={() => {
            this.setState({ hasSeater: true });
          }}
          type={!this.state.hasSeater ? "clear" : "solid"}
        />
        <Button
          onPress={() => {
            this.setState({ hasSeater: false });
          }}
          title="👎"
          type={this.state.hasSeater ? "clear" : "solid"}
        />
        <Button
          onPress={async () => {
            let reviewID = await add_review({
              variables: {
                userId: this.state.userId,
                washroomId: this.props.washroomData.id,
                rating: this.state.starCount,
                placeId: this.props.washroomData.placeId
              }
            });
            let newOverall =
              (overallRating * numberOfReviews + this.state.starCount) /
              (numberOfReviews + 1);

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
    );
  }
}

export default compose(
  graphql(ADD_REVIEW, { name: "add_review" }),
  graphql(UPDATE_WASHROOM_RATING, { name: "update_washroom_rating" })
)(Review);

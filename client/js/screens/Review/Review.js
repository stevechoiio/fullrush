import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Button, Header } from "react-native-elements";
import StarRating from "react-native-star-rating";
import { graphql, compose } from "react-apollo";
import { ADD_REVIEW } from "../../config/queries";
import Spinner from "react-native-number-spinner";
import BackButton from "../../components/BackButton";
class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3,
      stallCorrect: true,
      num: null,
      hasSeater: false
    };
  }
  componentDidMount() {
    this.setState({ num: 3 });
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    let { add_review } = this.props;
    console.log(this.props.washroomData);
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
                washroomId: this.props.washroomData.id,
                rating: this.state.starCount,
                placeId: this.props.washroomData.placeId
              }
            });
            console.log(reviewID);
            this.props.nav.goBack();
          }}
          title="Submit"
        />
      </View>
    );
  }
}

export default compose(graphql(ADD_REVIEW, { name: "add_review" }))(Review);

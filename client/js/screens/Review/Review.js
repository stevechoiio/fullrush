import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import StarRating from "react-native-star-rating";

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={styles.container}>
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

        <Text>were there 2 stalls?)</Text>
        <Button title="👍" />
        <Button title="👎" />
        <Text>were there toilet seaters?</Text>
        <Button title="👍" />
        <Button title="👎" />
        <Button onPress={() => this.props.nav.goBack()} title="Done" />
      </View>
    );
  }
}

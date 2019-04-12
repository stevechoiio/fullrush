import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import { Button, Header } from "react-native-elements";
import StarRating from "react-native-star-rating";
import { graphql, compose } from "react-apollo";
import {
  ADD_REVIEW,
  ADD_WASHROOM,
  GET_ALL_WASHROOMS
} from "../../config/queries";
import { Thumbnail } from "native-base";
import Spinner from "react-native-number-spinner";
import { material } from "react-native-typography";
import { withNavigation } from "react-navigation";

class AddWashroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false,
      login: true,
      starCount: 3,
      language: null,
      num: null,
      hasSeater: false,
      locationName: null,
      userId,
      photo: null
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
    let {
      add_washroom,
      add_review,
      name,
      vicinity,
      location,
      id,
      photo
    } = this.props;

    return (
      <View>
        <Header
          centerComponent={{
            text: "Add New Washrooms for ",
            style: { color: "#fff", fontSize: 20 }
          }}
        />

        <View>
          <Form
            onSubmit={() => {
              console.log("washroom submitted");
              add_washroom({
                variables: {
                  name: "Thompson River University",
                  stall: 5,
                  overallRating: 5,
                  toiletSeater: true
                }
              });
            }}
            validate={() => {}}
            render={({
              handleSubmit,
              pristine,
              invalid,
              hasSubmitErrors,
              submitError,
              form
            }) => (
              <View style={styles.flexContent}>
                <Text style={material.body1}>{name}</Text>
                <Text style={material.body1}>{vicinity}</Text>
                <Text>How Clean was it?</Text>
                <StarRating
                  disabled={false}
                  emptyStar={"ios-star-outline"}
                  fullStar={"ios-star"}
                  iconSet={"Ionicons"}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor={"black"}
                />

                <Text>How many stalls were there?</Text>
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
                <Text>were there toilet seaters?</Text>
                {this.state.hasSeater ? (
                  <View>
                    <Button
                      title="👍"
                      onPress={() => {
                        this.setState({ hasSeater: true });
                      }}
                    />
                    <Button
                      title="👎"
                      type="clear"
                      onPress={() => {
                        this.setState({ hasSeater: false });
                      }}
                    />
                  </View>
                ) : (
                  <View>
                    <Button
                      title="👍"
                      type="clear"
                      onPress={() => {
                        this.setState({ hasSeater: true });
                      }}
                    />
                    <Button
                      title="👎"
                      onPress={() => {
                        this.setState({ hasSeater: false });
                      }}
                    />
                  </View>
                )}

                {photo ? (
                  <Thumbnail square source={{ uri: photo.uri }} />
                ) : (
                  <Text>no photo</Text>
                )}
                <Button
                  title="Take a photo of the washroom!"
                  type="clear"
                  onPress={() => {
                    this.props.nav.navigate("Camera");
                  }}
                />
                <TouchableOpacity
                  onPress={async () => {
                    console.log(location);
                    try {
                      let washroomId = await add_washroom({
                        variables: {
                          placeId: id,
                          name,
                          address: vicinity,
                          stall: this.state.num,
                          overallRating: this.state.starCount,
                          numberOfReviews: 1,
                          toiletSeater: this.state.hasSeater,
                          lat: location.lat,
                          long: location.lng
                        },
                        refetchQueries: [
                          {
                            query: GET_ALL_WASHROOMS
                          }
                        ]
                      });
                      console.log("washroom submitted");
                      console.log(washroomId);

                      washroomId = washroomId.data.createWashroom.id;
                      let reviewID = await add_review({
                        variables: {
                          userId: this.state.userId,
                          placeId: id,
                          rating: this.state.starCount
                        }
                      });
                      console.log(reviewID);
                      this.props.navigation.navigate("Home");
                    } catch (e) {
                      console.log(e);
                      let reviewID = await add_review({
                        variables: {
                          userId: this.state.userId,
                          placeId: id,
                          rating: this.state.starCount
                        }
                      });
                      this.props.navigation.navigate("Home");
                    }
                  }}
                >
                  <Text style={styles.buttonText}>Submit!</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(
  compose(
    graphql(ADD_WASHROOM, { name: "add_washroom" }),
    graphql(ADD_REVIEW, { name: "add_review" })
  )(AddWashroom)
);

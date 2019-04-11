import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import { Button, Header } from "react-native-elements";
import StarRating from "react-native-star-rating";
import { graphql, compose } from "react-apollo";
import { ADD_REVIEW, ADD_WASHROOM } from "../../config/queries";
import Spinner from "react-native-number-spinner";
class AddWashroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false,
      login: true,
      starCount: 3,
      language: null,
      num: 5,
      hasSeater: false
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    let { add_washroom, add_review } = this.props;
    console.log(add_review);
    return (
      <View>
        <Header
          centerComponent={{
            text: "Add New Washrooms",
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
                <Text style={styles.text}>Add a Washroom</Text>
                <Field name="email">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.form}
                        editable={true}
                        {...input}
                        placeholder="Search the location"
                        onChangeText={text => this.setState({ text })}
                      />
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                  )}
                </Field>
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
                <Button
                  title="Take a photo of the washroom!"
                  type="clear"
                  onPress={() => {}}
                />
                <TouchableOpacity
                  onPress={async () => {
                    console.log("washroom submitted");
                    let washroomId = await add_washroom({
                      variables: {
                        name: "Thompson River University",
                        stall: 5,
                        overallRating: 5,
                        toiletSeater: true
                      }
                    });
                    washroomId = washroomId.data.createWashroom.id;
                    let reviewID = await add_review({
                      variables: { washroomId, rating: 5 }
                    });
                    console.log(reviewID);
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

export default compose(
  graphql(ADD_WASHROOM, { name: "add_washroom" }),
  graphql(ADD_REVIEW, { name: "add_review" })
)(AddWashroom);

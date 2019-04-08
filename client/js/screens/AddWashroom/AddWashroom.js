import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import { Button } from "react-native-elements";
import StarRating from "react-native-star-rating";
export default class AddWashroom extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", loading: false, login: true, starCount: 3 };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          onSubmit={() => {
            console.log("washroom submitted");
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
              <TouchableOpacity
                onPress={() => {}}
                disabled={pristine || invalid}
                style={styles.disabled}
              >
                <Text style={styles.buttonText}>Submit!</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

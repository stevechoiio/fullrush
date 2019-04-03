import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { FORM_ERROR } from "final-form";

const AUTHENTICATE_USER = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", loading: false };
  }
  static navigationOptions = {
    title: "Please sign in"
  };

  validate = values => {
    const errors = {};
    if (!values.email || values.email === "") {
      errors.email = "Email is required";
    } else if (/.*@.*\..*/.test(values.email) === false) {
      errors.email = "The email format is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          onSubmit={async value => {
            try {
              const result = await this.props.loginMutation({
                variables: { email: value.email, password: value.password }
              });

              const user = result.data.authenticateUser;

              await AsyncStorage.setItem("userToken", user.token);
              await AsyncStorage.setItem("id", user.id);

              console.log("In Login - Before navigate to Activities");

              this.props.navigation.navigate("Home");
            } catch (e) {
              console.log(e);
            }
          }}
          validate={this.validate}
          render={({
            handleSubmit,
            pristine,
            invalid,
            hasSubmitErrors,
            submitError,
            form
          }) => (
            <View style={styles.flexContent}>
              <Text style={styles.text}>Log In</Text>
              <Field name="email">
                {({ input, meta }) => (
                  <View>
                    <TextInput
                      style={styles.form}
                      editable={true}
                      {...input}
                      placeholder="Email"
                      onChangeText={text => this.setState({ text })}
                    />
                    <Text style={styles.error}>
                      {meta.error && meta.touched && meta.error}
                    </Text>
                  </View>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <View>
                    <TextInput
                      style={styles.form}
                      editable={true}
                      {...input}
                      placeholder="Password"
                      secureTextEntry={true}
                      onChangeText={text => this.setState({ text })}
                    />
                    <Text style={styles.error}>
                      {meta.error && meta.touched && meta.error}
                    </Text>
                  </View>
                )}
              </Field>
              {!pristine && !invalid ? (
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={pristine || invalid}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {}}
                  disabled={pristine || invalid}
                  style={styles.disabled}
                >
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
              )}
              {hasSubmitErrors && (
                <Text style={styles.errorMessage}>{submitError}</Text>
              )}
            </View>
          )}
        />
      </View>
    );
  }
}

export default compose(graphql(AUTHENTICATE_USER, { name: "loginMutation" }))(
  LogIn
);

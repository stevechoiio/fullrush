import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import { graphql, compose } from "react-apollo";
import {
  AUTHENTICATE_USER,
  SIGNUP_USER,
  UPDATE_SIGNEDUPUSER
} from "../../config/queries";
import { Input, Button, Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", loading: false, login: true, gender: null };
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
      <View>
        <Form
          onSubmit={async value => {
            try {
              if (this.state.login) {
                this.setState({ loading: true });
                const result = await this.props.loginMutation({
                  variables: { email: value.email, password: value.password }
                });

                const user = result.data.authenticateUser;

                await AsyncStorage.setItem("userToken", user.token);
                await AsyncStorage.setItem("id", user.id);

                console.log("In Login - Before navigate to Activities");
              } else {
                console.log(value);
                if (value.password !== value.confirmpassword) {
                  throw new Error("password not correct");
                }
                const result = await this.props.signupMutation({
                  variables: { email: value.email, password: value.password }
                });
                const user = result.data.signupUser;
                const updatedUser = await this.props.updateSignedupUserMutation(
                  {
                    variables: {
                      id: user.id,
                      name: value.name,
                      gender: this.state.gender
                    }
                  }
                );
                console.log(updatedUser);
                await AsyncStorage.setItem("userToken", user.token);
                await AsyncStorage.setItem("id", user.id);
              }

              this.props.navigation.navigate("Account");
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
            <View>
              {this.state.login ? (
                <Header
                  centerComponent={{
                    text: "Login",
                    style: { color: "#fff", fontSize: 20 }
                  }}
                />
              ) : (
                <Header
                  centerComponent={{
                    text: "Sign Up",
                    style: { color: "#fff", fontSize: 20 }
                  }}
                />
              )}

              <Field name="email">
                {({ input, meta }) => (
                  <Input
                    placeholder="e-mail"
                    {...input}
                    onChangeText={text => this.setState({ text })}
                    leftIcon={{ type: "font-awesome", name: "at" }}
                  />
                )}
              </Field>
              {!this.state.login ? (
                <Field name="name">
                  {({ input, meta }) => (
                    <Input
                      placeholder="full name"
                      {...input}
                      onChangeText={text => this.setState({ text })}
                      leftIcon={{ type: "font-awesome", name: "user" }}
                    />
                  )}
                </Field>
              ) : null}
              <Field name="password">
                {({ input, meta }) => (
                  <Input
                    editable={true}
                    {...input}
                    placeholder="password"
                    secureTextEntry={true}
                    leftIcon={{ type: "font-awesome", name: "unlock-alt" }}
                    onChangeText={text => {
                      console.log(text);
                      this.setState({ originalPassword: text });
                      console.log(this.state);
                    }}
                  />
                )}
              </Field>
              {!this.state.login ? (
                <Field name="confirmpassword">
                  {({ input, meta }) => (
                    <Input
                      {...input}
                      placeholder="confirm password"
                      secureTextEntry={true}
                      leftIcon={{ type: "font-awesome", name: "unlock-alt" }}
                      onChangeText={text => {
                        console.log(text);
                        this.setState({ confirmpassword: text });
                      }}
                    />
                  )}
                </Field>
              ) : null}
              {!this.state.login ? (
                <View>
                  <Button
                    onPress={() => {
                      this.setState({ gender: "male" });
                    }}
                    type={this.state.gender === "male" ? "solid" : "clear"}
                    icon={<Icon name="male" size={30} />}
                  />
                  <Button
                    onPress={() => {
                      this.setState({ gender: "female" });
                    }}
                    type={this.state.gender === "female" ? "solid" : "clear"}
                    icon={<Icon name="female" size={30} />}
                  />
                </View>
              ) : null}
              <TouchableOpacity
                onPress={() => {
                  console.log("pressed");
                  this.setState({ login: !this.state.login });
                }}
              >
                {this.state.login ? (
                  <Text>new user?</Text>
                ) : (
                  <Text>already have an account?</Text>
                )}
              </TouchableOpacity>
              {!pristine && !invalid ? (
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={pristine || invalid}
                  style={styles.button}
                >
                  {this.state.loading ? (
                    <ActivityIndicator />
                  ) : (
                    <Text style={styles.buttonText}>
                      {this.state.login ? "Log In" : "Sign Up"}
                    </Text>
                  )}
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {}}
                  disabled={pristine || invalid}
                  style={styles.disabled}
                >
                  <Text style={styles.buttonText}>
                    {this.state.login ? "Log In" : "Sign Up"}
                  </Text>
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

export default compose(
  graphql(AUTHENTICATE_USER, { name: "loginMutation" }),
  graphql(SIGNUP_USER, { name: "signupMutation" }),
  graphql(UPDATE_SIGNEDUPUSER, { name: "updateSignedupUserMutation" })
)(Login);

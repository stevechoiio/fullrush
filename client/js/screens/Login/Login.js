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
import { AUTHENTICATE_USER } from "../../config/queries";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
<Input placeholder="BASIC INPUT" />;
class LogIn extends Component {
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
      <View style={styles.container}>
        <Form
          onSubmit={async value => {
            try {
              this.setState({ loading: true });
              const result = await this.props.loginMutation({
                variables: { email: value.email, password: value.password }
              });

              const user = result.data.authenticateUser;

              await AsyncStorage.setItem("userToken", user.token);
              await AsyncStorage.setItem("id", user.id);

              console.log("In Login - Before navigate to Activities");

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
            <View style={styles.flexContent}>
              <Text style={styles.text}>Log In</Text>
              <Field name="email">
                {({ input, meta }) => (
                  <View>
                    {/* <Input
                      placeholder="INPUT WITH ICON"
                      leftIcon={{ type: "font-awesome", name: "chevron-left" }}
                    />

                    <Input
                      placeholder="INPUT WITH CUSTOM ICON"
                      leftIcon={<Icon name="user" size={24} color="black" />}
                    />

                    <Input
                      placeholder="INPUT WITH SHAKING EFFECT"
                      shake={true}
                    />

                    <Input
                      placeholder="INPUT WITH ERROR MESSAGE"
                      errorStyle={{ color: "red" }}
                      errorMessage="ENTER A VALID ERROR HERE"
                    /> */}
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

              <Input
                placeholder="e-mail"
                leftIcon={{ type: "font-awesome", name: "chevron-left" }}
              />
              <Input placeholder="full name" />
              <Input placeholder="password" secureTextEntry={true} />
              <Input placeholder="confirm password" secureTextEntry={true} />
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
              {!this.state.login ? (
                <Field name="confirmpassword">
                  {({ input, meta }) => (
                    <View>
                      <TextInput
                        style={styles.form}
                        editable={true}
                        {...input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ text })}
                      />
                      <Text style={styles.error}>
                        {meta.error && meta.touched && meta.error}
                      </Text>
                    </View>
                  )}
                </Field>
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
                    <Text style={styles.buttonText}>Log In</Text>
                  )}
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

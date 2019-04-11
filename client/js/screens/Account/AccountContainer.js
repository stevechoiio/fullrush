import React, { Component } from "react";
import Account from "./Account";
import { Text, View } from "react-native";
import { Query } from "react-apollo";
import { GET_USER_INFO } from "../../config/queries";
import AsyncStorage from "@react-native-community/async-storage";
export default class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }
  componentDidMount = async () => {
    let id = await AsyncStorage.getItem("id");
    this.setState({ id });
  };
  render() {
    return (
      <Query query={GET_USER_INFO} variables={{ id: this.state.id }}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View>
                <Text>Loading...</Text>
              </View>
            );
          if (error)
            return (
              <View>
                <Text>Error...</Text>
                <Text>{error.message}</Text>
              </View>
            );
          console.log(data.allUsers[0]);
          return (
            <Account
              navigation={this.props.navigation}
              user={data.allUsers[0]}
            />
          );
        }}
      </Query>
    );
  }
}

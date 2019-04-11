import React, { Component } from "react";
import { Text, View } from "react-native";
import Home from "./Home";
import { Query } from "react-apollo";
import { GET_ALL_WASHROOMS } from "../../config/queries";

export default class HomeContainer extends Component {
  render() {
    return (
      <Query query={GET_ALL_WASHROOMS}>
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
            
          if (!data.allWashrooms[0]) {
            return (
              <View>
                <Text>Hello...</Text>
              </View>
            );
          } else {
            console.log(data.allWashrooms);
            return (
              <Home nav={this.props.navigation} data={data.allWashrooms} />
            );
          }
        }}
      </Query>
    );
  }
}

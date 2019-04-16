import React, { Component } from "react";
import Washroom from "./Washroom";
import { Query } from "react-apollo";
import { View, Text } from "react-native";
import { GET_REVIEWS_FOR_WASHROOM } from "../../config/queries";
var Spinner = require("react-native-spinkit");
export default class WashroomContainer extends Component {
  render() {
    const washroomData = this.props.navigation.getParam("data");
    return (
      <Query
        query={GET_REVIEWS_FOR_WASHROOM}
        variables={{ placeId: washroomData.placeId }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading)
            return (
              <View>
                <Text>loading</Text>
              </View>
            );
          if (error)
            return (
              <View>
                <Text>Error...</Text>
                <Text>{error.message}</Text>
              </View>
            );

          return (
            <Washroom
              data={washroomData}
              reviews={data}
              nav={this.props.navigation}
              refetch={refetch}
            />
          );
        }}
      </Query>
    );
  }
}

import React, { Component } from "react";
import Washroom from "./Washroom";
import { Query } from "react-apollo";
import { View, Text } from "react-native";
import { GET_REVIEWS_FOR_WASHROOM } from "../../config/queries";
import Spinner from "react-native-loading-spinner-overlay";
export default class WashroomContainer extends Component {
  render() {
    const washroomData = this.props.navigation.getParam("data");
    return (
      <Query
        query={GET_REVIEWS_FOR_WASHROOM}
        variables={{ placeId: washroomData.placeId }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <Spinner visible={loading} />;
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

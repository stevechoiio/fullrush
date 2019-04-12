import React, { Component } from "react";
import { Text, View } from "react-native";
import Home from "./Home";
import { Query } from "react-apollo";
import {
  GET_ALL_WASHROOMS,
  GET_ALL_WASHROOM_BY_DISTANCE
} from "../../config/queries";

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      var crd = pos.coords;

      this.setState({ lat: crd.latitude, long: crd.longitude });
    });
  }
  render() {
    return (
      <Query
        query={GET_ALL_WASHROOM_BY_DISTANCE}
        variables={{
          latmin: this.state.lat - 1,
          latmax: this.state.lat + 1,
          longmin: this.state.long - 1,
          longmax: this.state.long + 1
        }}
      >
        {({ loading, error, data, refetch }) => {
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
            console.log(data);
            return (
              <View>
                <Text>Hello...</Text>
              </View>
            );
          } else {
            return (
              <Home
                nav={this.props.navigation}
                refetch={refetch}
                data={data.allWashrooms}
              />
            );
          }
        }}
      </Query>
    );
  }
}

import React, { Component } from "react";
import { Text, View } from "react-native";
import Home from "./Home";
import { Query } from "react-apollo";
import {
  GET_ALL_WASHROOMS,
  GET_ALL_WASHROOM_BY_DISTANCE
} from "../../config/queries";
import Spinner from "react-native-loading-spinner-overlay";
var SpinnerOne = require("react-native-spinkit");
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
      console.log(this.state);
    });
  }
  render() {
    return (
      <Query
        query={GET_ALL_WASHROOM_BY_DISTANCE}
        variables={{
          latmin: this.state.lat - 0.1,
          latmax: this.state.lat + 0.1,
          longmin: this.state.long - 0.1,
          longmax: this.state.long + 0.1
        }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <Spinner visible={true} />;
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
                location={this.state}
              />
            );
          }
        }}
      </Query>
    );
  }
}

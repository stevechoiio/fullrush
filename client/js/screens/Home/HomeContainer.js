import React, { Component } from "react";
import { Text, View } from "react-native";
import Home from "./Home";
import { Query, Mutation } from "react-apollo";
import { GET_ALL_WASHROOMS } from "../../config/queries";
import Spinner from "react-native-loading-spinner-overlay";
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
      <Mutation mutation={GET_ALL_WASHROOMS}>
        {(createuser, { loading, error, data, refetch }) => {
          if (loading) return <Spinner visible={true} />;
          if (error) {
            return (
              <View>
                <Text>Error...</Text>
                <Text>{error.message}</Text>
              </View>
            );
          }
          console.log(createuser);
          return (
            <View />
            // <Home
            //   nav={this.props.navigation}
            //   refetch={refetch}
            //   data={data.allWashrooms}
            //   location={this.state}
            // />
          );
        }}
      </Mutation>
    );
  }
}

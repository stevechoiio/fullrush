import React, { Component } from "react";
import { Text } from "react-native"
import Home from "./Home";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View } from "native-base";

// Dummy Data
let sampleWashroom = {
  id: "01010101",
  name: "Sample Washroom",
  overallRating: 3,
  instruction: "Try using dyson"
};

let sampleWashroom2 = {
  id: "1425",
  name: "Sample Washroom2",
  overallRating: 4,
  instruction: "Dyson is awesome"
};

let sampleWashroom3 = {
  id: "1612",
  name: "Sample Washroom3",
  overallRating: 5,
  instruction: "Try Dyson guys"
};

export default class HomeConatiner extends Component {
  render() {
    return (
      <Query
        query={gql`
          query Washroom {
            allWashrooms {
              name
              instruction
              overallRating
            }
          }
        `
       }
      >
      {({ loading, error, data})=>{ 
        if (loading) {
          console.log("catch loading");
          return <View><Text>Loading...</Text></View>
        }
        if (error) {
          console.log("catch error");
          return <View><Text>Error...</Text></View>
        }
        if (!data.allWashrooms[0]) {
          console.log("Catch Empty Data");
          return <View><Text>Empty Data Error...</Text></View>
        } else {
          console.log("Successful " + data);
          return <Home nav={this.props.navigation} data={[sampleWashroom2]}/>;
        }
      }}
      </Query>
      );
    // return <Home nav={this.props.navigation} />;
  }
}

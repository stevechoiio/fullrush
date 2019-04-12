import React, { Component } from "react";
import CheckPhoto from "./CheckPhoto";
import { UPDATE_WASHROOM_IMAGE } from '../../config/queries';
import { Mutation } from "react-apollo";

export default class CheckPhotoContainer extends Component {
  render() {
    const photo = this.props.navigation.getParam("data");
    return (
      // <Mutation mutation={ UPDATE_WASHROOM_IMAGE }> 
      //   {({ loading, error, data, refetch }) => {
      //     if (loading) {
      //       <View>
      //         <Text>Loading... </Text>
      //       </View>
      //     }
      //     if (error) {
      //       <View>
      //         <Text>
      //           Error... {error}
      //         </Text>
      //       </View>
      //     }

          // return (
          <CheckPhoto data={photo} nav={this.props.navigation} />
          // );
      //   }}
      // </Mutation>
    )
  }
}

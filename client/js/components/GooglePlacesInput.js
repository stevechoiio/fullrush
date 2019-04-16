import React, { Component } from "react";
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  RefreshControl
} from "react-native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Header, Overlay, Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { graphql, compose } from "react-apollo";
import { CHECK_DUPLICATE_WASHROOM } from "../config/queries";
class GooglePlacesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      refreshing: false,
      isVisible: false
    };
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    navigator.geolocation
      .getCurrentPosition(pos => {
        var crd = pos.coords;

        lat = crd.latitude;
        long = crd.longitude;
        let location = `${lat},${long}`;
        this.setState({ location });
      })
      .then(() => {
        this.setState({ refreshing: false });
      });
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      var crd = pos.coords;

      lat = crd.latitude;
      long = crd.longitude;
      let location = `${lat},${long}`;
      this.setState({ location });
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View keyboardShouldPersistTaps={"always"}>
          <Header
            centerComponent={{
              text: "Add New Washrooms",
              style: { color: "#fff", fontSize: 20 }
            }}
          />
          <Overlay
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
          >
            <View>
              <Text>This washroom has already been added by a user.</Text>
              <Button
                title="Leave a review"
                onPress={() => {
                  this.props.navigation.navigate("Review", {
                    ...this.state.data,
                    ...this.state.details
                  });
                  this.setState({ isVisible: false });
                }}
              />
              <Button
                title="go see the washroom"
                onPress={() => {
                  this.props.navigation.navigate("Washroom", {
                    data: this.state.washroomDetails
                  });
                  this.setState({ isVisible: false });
                }}
              />
            </View>
          </Overlay>

          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          >
            <GooglePlacesAutocomplete
              placeholder="Search for the building"
              minLength={2} // minimum length of text to search
              autoFocus={true}
              listViewDisplayed="auto" // true/false/undefined
              fetchDetails={true}
              renderDescription={row => {
                return [row.description, row.name];
              }} // custom description render
              onPress={async (data, details = null) => {
                let washroom = await this.props.getId.refetch({
                  placeId: data.place_id
                });
                if (washroom.data.allWashrooms[0]) {
                  this.setState({
                    data: { ...data, ...details },
                    washroomDetails: washroom.data.allWashrooms[0]
                  });
                  this.setState({ isVisible: true });
                } else {
                  this.props.navigation.navigate("AddWashroom", {
                    ...data,
                    ...details
                  });
                  this.setState({ isVisible: false });
                }
              }}
              getDefaultValue={() => ""}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: "AIzaSyAr_W5HFV59akkn9SOTu5PJr0SWz_38_NE",
                language: "en",
                radius: 1000,
                location: this.state.location,
                types: "establishment"
              }}
              styles={{
                container: {
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  width: Dimensions.get("window").width,
                  marginTop: 0,
                  marginBottom: 100,
                  opacity: 0.9,
                  borderRadius: 8
                },
                description: {
                  fontWeight: "bold",
                  color: "#007",
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  opacity: 0.9
                },
                predefinedPlacesDescription: {
                  color: "#355"
                },
                textInputContainer: {
                  height: 50
                },
                textInput: {
                  height: 33,
                  fontSize: 16
                }
              }}
              currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="Search nearby me"
              nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: "distance",
                type: "establishment"
              }}
              GooglePlacesDetailsQuery={{
                // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                fields: ["formatted_address", "opening_hours"]
              }}
              filterReverseGeocodingByTypes={[
                "locality",
                "administrative_area_level_3"
              ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              debounce={100} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(
  compose(
    graphql(CHECK_DUPLICATE_WASHROOM, {
      name: "getId",
      options: { variables: { placeId: "" } }
    })
  )(GooglePlacesInput)
);

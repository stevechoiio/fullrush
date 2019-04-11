import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Button, Header } from "react-native-elements";

export const GooglePlacesInput = () => {
  return (
    <View
      style={{
        top: 0,
        position: "absolute",
        flex: 1,
        justifyContent: "center"
      }}
    >
      <Header
        centerComponent={{
          text: "Add New Washrooms",
          style: { color: "#fff", fontSize: 20 }
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Search for the building"
        minLength={2} // minimum length of text to search
        autoFocus={true}
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={row => row.description} // custom description render
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        getDefaultValue={() => ""}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: "AIzaSyAr_W5HFV59akkn9SOTu5PJr0SWz_38_NE",
          language: "en", // language of the results
          types: "establishment" // default: 'geocode'
        }}
        styles={{
          container: {
            backgroundColor: "#fff",
            width: Dimensions.get("window").width,

            marginBottom: 0,
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
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: "distance",
          type: "establishment"
        }}
        GooglePlacesDetailsQuery={{
          // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
          fields: "formatted_address"
        }}
        filterReverseGeocodingByTypes={[
          "locality",
          "administrative_area_level_3"
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        debounce={400} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />
    </View>
  );
};

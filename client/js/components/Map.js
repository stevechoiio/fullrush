import MapView, { Marker } from "react-native-maps";
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          height: 175,
          width: Dimensions.get("window").width,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.props.location.lat,
            longitude: this.props.location.long,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
        >
          <Marker
            coordinate={{
              latitude: this.props.location.lat,
              longitude: this.props.location.long
            }}
          />
          {this.props.washrooms.map((marker, index) => {
            return (
              <Marker
                key={index}
                onPress={() => {
                  this.props.navigation.navigate("Washroom", {
                    data: marker
                  });
                }}
                coordinate={{
                  latitude: marker.locationLat,
                  longitude: marker.locationLong
                }}
              />
            );
          })}
        </MapView>
      </View>
    );
  }
}

export default withNavigation(Map);

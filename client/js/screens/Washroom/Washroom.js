import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { material } from "react-native-typography";
import StarRating from "react-native-star-rating";
// <Text style={material.display1}>Hello Typography!</Text>;
import getDirections from "react-native-google-maps-directions";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Header } from "react-native-elements";
import { Image } from "react-native";
import BackButton from "../../components/BackButton";
const handleGetDirections = async (lat, long) => {
  let currentLat, currentLong;
  let location = await navigator.geolocation.getCurrentPosition(pos => {
    var crd = pos.coords;

    const data = {
      source: {
        latitude: crd.latitude,
        longitude: crd.longitude
      },
      destination: {
        latitude: lat,
        longitude: long
      },
      params: [
        {
          key: "travelmode",
          value: "walking" // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate" // this instantly initializes navigation using the given travel mode
        }
      ]
    };

    getDirections(data);
  });
};
export default props => {
  let { data } = props;
  console.log(data);
  return (
    <View>
      <Header
        leftComponent={<BackButton />}
        centerComponent={{
          text: data.name,
          style: { color: "#fff", fontSize: 15 }
        }}
      />
      {/* <Image source={{uri: data.listOfPhotos.url}}></Image> */}
      <Text style={material.caption}>{data.address}</Text>

      <StarRating disabled={true} maxStars={5} rating={data.overallRating} />
      <View style={{ flex: 0, flexDirection: "row" }}>
        <Text>Toilet Seat covers</Text>
        <Icon name="check" size={15} color="black" />
      </View>
      <Text style={material.title}>Most Recent Review:</Text>
      <Text>see more reviews</Text>

      <Button
        onPress={() => handleGetDirections(data.locationLat, data.locationLong)}
        title="direction"
      />
      <Button
        onPress={() => {
          props.nav.navigate("Review");
        }}
        title="review"
      />
    </View>
  );
};

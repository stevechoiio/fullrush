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
const handleGetDirections = () => {
  const data = {
    source: {
      latitude: -33.8356372,
      longitude: 18.6947617
    },
    destination: {
      latitude: -33.8600024,
      longitude: 18.697459
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
};
export default props => {
  let data = props.data;

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
      <Text style={material.caption}>Address</Text>
      <Text style={material.body1}>Hours of Operation</Text>
      <Text style={material.body1}>11AM ~ 9PM</Text>
      <StarRating disabled={true} maxStars={5} rating={data.overallRating} />
      <View style={{ flex: 0, flexDirection: "row" }}>
        <Text>Toilet Seat covers</Text>
        <Icon name="check" size={15} color="black" />
      </View>
      <Text style={material.title}>Most Recent Review:</Text>
      <Text>see more reviews</Text>

      <Button onPress={handleGetDirections} title="direction" />
      <Button
        onPress={() => {
          props.nav.navigate("Review");
        }}
        title="review"
      />
    </View>
  );
};

import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { material } from "react-native-typography";
import StarRating from "react-native-star-rating";
// <Text style={material.display1}>Hello Typography!</Text>;
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { Image } from "react-native";

export default props => {
  return (
    <View style={styles.container}>
      <Image source={{uri: ""}}></Image>
      <Text style={material.title}>Name of the Building</Text>
      <Text style={material.caption}>Address</Text>
      <Text style={material.body1}>Hours of Operation</Text>
      <Text style={material.body1}>11AM ~ 9PM</Text>
      <StarRating disabled={true} maxStars={5} rating={4} />

      <View style={{ flex: 0, flexDirection: "row" }}>
        <Text>Toilet Seat covers</Text>
        <Icon name="check" size={15} color="black" />
      </View>
      <Text style={material.title}>Most Recent Review:</Text>
      <Text>see more reviews</Text>

      <Button title="direction" />
      <Button
        onPress={() => {
          props.nav.navigate("Review");
        }}
        title="review"
      />
    </View>
  );
};

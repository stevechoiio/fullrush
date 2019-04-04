import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { material } from "react-native-typography";
import StarRating from "react-native-star-rating";
// <Text style={material.display1}>Hello Typography!</Text>;
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";

export default () => {
  return (
    <View style={styles.container}>
      <Text style={material.title}>Name of the Building</Text>
      <Text style={material.caption}>Address</Text>
      <Text style={material.body1}>Hours of Operation</Text>
      <StarRating disabled={false} maxStars={5} rating={5} />
      <Text style={material.title}>Amenities</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Icon name="music" size={15} color="black">
          toilet seat cover
        </Icon>
        <Icon name="music" size={15} color="black">
          something
        </Icon>
        <Icon name="music" size={15} color="black">
          something
        </Icon>
      </View>
      <Text style={material.title}> 10 icons?</Text>
      <Button title="direction" />
      <Button title="review" />
    </View>
  );
};

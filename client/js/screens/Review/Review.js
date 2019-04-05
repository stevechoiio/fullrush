import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import StarRating from "react-native-star-rating";
export default () => {
  return (
    <View style={styles.container}>
      <Text>How Clean was it?</Text>
      <StarRating disabled={false} maxStars={5} rating={4.5} />
      <Button title="Done" />
    </View>
  );
};

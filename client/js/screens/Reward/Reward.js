import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { CircularProgress } from "react-native-circular-progress";
export default () => {
  return (
    <View style={styles.container}>
      <Text>Reward Screen!</Text>
      <CircularProgress
        size={300}
        width={20}
        fill={80}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
      >
        {() => <Text> 10 more reviews to reach Sephora</Text>}
      </CircularProgress>
      <Text>Prize of the Month</Text>
      <Text> Channel gift card 100$</Text>
      <Text> draw in : (counter)</Text>
    </View>
  );
};

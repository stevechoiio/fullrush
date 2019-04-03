import React from "react";
import { Text, View, ListItem } from "react-native";
import styles from "./styles";

const list = [
  {
    name: "Sample Washroom 1",
    instruction: "Hello, sample instruction"
  },
  {
    name: "Sample Washroom 2",
    instruction: "Hello, sample instruction 2"
  }
]; // List of Washrooms Loaded

export default () => {
  return (
    <View style={styles.container}>
      {list.map((w, i) => (
        <ListItem
          key = {i}
          name = {w.name}
          instruction = {w.instruction}
        />
        ))
      }
    </View>
  );
};

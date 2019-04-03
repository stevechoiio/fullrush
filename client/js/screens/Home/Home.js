import React from "react";
import { Text, View, ListItem } from "react-native";
import styles from "./styles";
import Login from "../Login";

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

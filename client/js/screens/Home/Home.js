import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Login from "../Login";
export default props => {
  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <TouchableOpacity onPress={() => props.nav.navigate("Washroom")}>
        <Text>Washroom Card</Text>
      </TouchableOpacity>
    </View>
  );
};

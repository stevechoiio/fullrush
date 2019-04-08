import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./styles";
export default ({ navigation }) => {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate("LogIn");
  };
  return (
    <View style={styles.container}>
      <Text>Account Screen!</Text>
      <TouchableOpacity onPress={_signOutAsync}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

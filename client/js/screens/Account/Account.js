import React from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import styles from "./styles";
export default ({ navigation }) => {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Auth");
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

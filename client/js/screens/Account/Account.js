import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { CircularProgress } from "react-native-circular-progress";
import styles from "./styles";
export default ({ navigation }) => {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate("LogIn");
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Reward Screen!</Text>
        <CircularProgress
          size={300}
          width={20}
          fill={80}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
        >
          {() => <Text> you have 200 points</Text>}
        </CircularProgress>
      </View>
      <TouchableOpacity onPress={_signOutAsync}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

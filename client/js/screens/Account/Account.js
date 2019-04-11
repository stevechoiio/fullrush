import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import { CircularProgress } from "react-native-circular-progress";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
export default ({ navigation, user }) => {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate("LogIn");
  };
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "My Rewards",
          style: { color: "#fff", fontSize: 20 }
        }}
        rightComponent={() => {
          return (
            <TouchableOpacity>
              <Icon name="cog" size={20} color="white" />
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.container}>
        <Text>Reward Screen!</Text>
        <Text>Hello, {user.name}!</Text>
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

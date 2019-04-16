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
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          backgroundColor: "#ff6b6b",
          justifyContent: "space-around"
        }}
        statusBarProps={{ barStyle: "light-content" }}
        centerComponent={{
          text: "My Rewards",
          style: { color: "#fff", fontSize: 20 }
        }}
        rightComponent={() => {
          return (
            <TouchableOpacity>
              <Icon name="cog" size={25} color="white" />
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.container}>
        <Text>Hello, {user.name}!</Text>
        <CircularProgress
          size={300}
          width={20}
          fill={80}
          backgroundColor="#BFD7EA"
          tintColor="#3d5875"
        >
          {() => <Text> you have wrote {user.userReviews.length} reviews</Text>}
        </CircularProgress>
      </View>
      <TouchableOpacity onPress={_signOutAsync}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

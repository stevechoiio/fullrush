import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import { CircularProgress } from "react-native-circular-progress";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { material } from "react-native-typography";
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
        leftComponent={() => {
          return (
            <TouchableOpacity>
              <Icon name="cog" size={25} color="white" />
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.container}>
        <Text style={material.display1}>Hello, {user.name}!</Text>
        <CircularProgress
          size={300}
          width={20}
          fill={80}
          backgroundColor="#BFD7EA"
          tintColor="#3d5875"
        >
          {() => (
            <Text style={material.button}>
              you have wrote {user.userReviews.length} reviews
            </Text>
          )}
        </CircularProgress>
      </View>
      <TouchableOpacity
        style={{
          margin: 3,
          alignItems: "center",
          justifyContent: "center",
          width: "40%",
          height: 50,
          borderRadius: 13
        }}
        onPress={_signOutAsync}
      >
        <Text style={{ ...material.title, color: "#BFD7EA" }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

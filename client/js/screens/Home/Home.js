import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./styles";
import Login from "../Login";

let sampleWashroom = {
  id: "01010101",
  name: "Sample Washroom",
  stall: 3,
  building: "BCIT",
  listofReviews: [],
  overallRating: 3,
  instruction: "Try using dyson",
};

let sampleWashroom2 = {
  id: "1425",
  name: "Sample Washroom",
  stall: 3,
  building: "BCIT",
  listofReviews: [],
  overallRating: 3,
  instruction: "Try using dyson"
}

const Home = ({data}) => {
  return(
    <View style={styles.container}>
      <FlatList
        data={[{key: 'a', data: sampleWashroom}, {key: 'b', data: sampleWashroom2}]}
        renderItem={({item}) => <Text>{item.data.id}, {item.data.name}</Text>}
        />
    </View>
  );
};

export default Home;
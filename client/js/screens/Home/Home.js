import React from "react";
import { Text, View, ListItem } from "react-native";
import styles from "./styles";
import Login from "../Login";

// Dummy: List of Washrooms
const stub = [
  {name: "Sample Building 1", building: "on"}, 
  {name: "Sample Building 2", building: "bc"}, 
  {name: "Sample Building 3", address: "ab"}
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", loading: false };
  }
  
  render() {
    return (
    <View style={styles.container}>
      <Text>Hello Home</Text>
    </View>
  );
}
}

export default compose(graphql(AUTHENTICATE_USER, { name: "HomeMutation" }))(
  Home
);
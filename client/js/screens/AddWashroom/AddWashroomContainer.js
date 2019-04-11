import React, { Component } from "react";
import { Text } from "react-native";
import { Drawer } from "native-base";
import AddWashroom from "./AddWashroom";
// const SideBar = () => {
//   return <Text>hey</Text>;
// };
export default class AddWashroomContainer extends Component {
  // closeDrawer = () => {
  //   this.drawer._root.close();
  // };
  // openDrawer = () => {
  //   this.drawer._root.open();
  // };

  
  render() {
    return (
      // <Drawer
      //   ref={ref => {
      //     this.drawer = ref;
      //   }}
      //   content={<SideBar navigator={this.navigator} />}
      //   onClose={() => this.closeDrawer()}
      // >
        <AddWashroom nav={this.props.navigation}/>
      // </Drawer>
    );
  }
}

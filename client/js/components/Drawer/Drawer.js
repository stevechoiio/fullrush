import React, { Component } from "react";
import { Drawer } from "native-base";
const SideBar = () => {
  return <Text>hey</Text>;
};
export default class DrawerMenu extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        // Main View
      </Drawer>
    );
  }
}

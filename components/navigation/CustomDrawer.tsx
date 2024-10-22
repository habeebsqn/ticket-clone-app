import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import DrawerHeader from "./DrawerHeader";

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        gap: 10,
        backgroundColor: "white",
        flex: 1,
        paddingTop: 0,
      }}
    >
      <DrawerHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Image } from "react-native";
import { ThemedBtn } from "../ThemedBtn";

const DrawerHeader = (props: any) => {
  return (
    <ThemedView className="bg-black justify-end h-[30vh] space-y-[5]">
      <Image
        source={require("@/assets/images/logo2.png")}
        className="h-20 w-20"
        resizeMode="contain"
      />
      <ThemedBtn
        onPress={() => {}}
        title="SignIn"
        btnStyle="text-white w-full"
        textStyle={{ textAlign: "left" }}
      />
    </ThemedView>
  );
};

export default DrawerHeader;

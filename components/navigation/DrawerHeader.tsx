import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Image } from "react-native";

const DrawerHeader = (props: any) => {
  return (
    <ThemedView className="bg-black justify-end h-[30vh] px-[5vw] space-y-[5]">
      <Image
        source={require("@/assets/images/logo2.png")}
        className="h-20 w-20"
        resizeMode="contain"
      />
      <ThemedText className="text-white" type="default">
        SignIn
      </ThemedText>
    </ThemedView>
  );
};

export default DrawerHeader;

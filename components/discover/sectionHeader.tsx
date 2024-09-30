import React from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <View className="w-full space-y-[15vh] ">
      <View className="w-full h-[1.5px] bg-[#979595]" />
      <View className="space-y-1">
        <ThemedText
          type="title"
          className="uppercase text-black text-2xl text-center"
        >
          {title}
        </ThemedText>
        <View className="w-[20vw] bg-[#961489] h-[4px] self-center" />
      </View>
    </View>
  );
};

export default SectionHeader;

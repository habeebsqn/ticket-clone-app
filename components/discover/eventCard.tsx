import React, { useState } from "react";
import { ThemedView } from "../ThemedView";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedBtn } from "../ThemedBtn";

type Props = {
  item: {
    Title: string;
    Author: string;
    image: any;
  };
};

const EventCard = ({ item }: Props) => {
  const [isFocused, setIsFocused] = useState<any>(false);

  return (
    <ThemedView className="justify-between  space-y-[10vh] bg-white">
      <Pressable
        onPressIn={() => setIsFocused(true)}
        onPressOut={() => setIsFocused(false)}
      >
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          className={`h-[25vh]  rounded-md flex-row ${
            isFocused && "bg-blue-500"
          } overflow-hidden`}
          imageStyle={{ borderRadius: 8 }}
        >
          {isFocused && (
            <View className=" bg-blue-400 w-[90%] h-full opacity-50" />
          )}
          {isFocused && (
            <ThemedBtn
              onPress={() => {}}
              title=">"
              type="secondary"
              btnStyle="h-full w-[10%] justify-center items-center"
            />
          )}
        </ImageBackground>
      </Pressable>
      <ThemedText
        type="default"
        className="capitalize text-gray-400 text-sm  mx-3"
      >
        {item.Title}
      </ThemedText>

      <ThemedText type="subtitle" className="capitalize text-black mx-3">
        {item.Author}
      </ThemedText>
    </ThemedView>
  );
};

export default EventCard;

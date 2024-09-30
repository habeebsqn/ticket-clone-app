import React from "react";
import { ThemedView } from "../ThemedView";
import { Image, Text } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
  item: {
    Title: string;
    Author: string;
    image: any;
  };
};

const EventCard = ({ item }: Props) => {
  return (
    <ThemedView className="justify-between  space-y-[10vh]">
      <Image
        source={item.image}
        resizeMode={"cover"}
        className={"rounded-lg h-[25vh] w-full"}
      />
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

import React from "react";
import { FlatList, Pressable, Text } from "react-native";
import { ThemedView } from "../ThemedView";

type Props = {
  item: {
    name: string;
    subCat?: {
      name: string;
    }[];
  };
  onPress?: () => void;
};

const CategoryItem = ({ item, onPress }: Props) => {
  return (
    <ThemedView className="justify-center py-2 px-3 border-[1px] border-white rounded-md bg-black">
      <Pressable android_ripple={{ color: "black" }}>
        <Text className="text-white font-medium text-xs">{item?.name}</Text>
      </Pressable>
    </ThemedView>
  );
};

export default CategoryItem;

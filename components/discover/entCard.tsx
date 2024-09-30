import React from "react";
import { Image, Text, View } from "react-native";

type Props = {
  item: {
    title: string;
    description: string;
    image: any;
  };
};

const EntCard = ({ item }: Props) => {
  return (
    <View className="space-y-[7vh] w-[60vw]">
      <Image
        source={item.image}
        resizeMode={"cover"}
        className={"rounded-lg h-[25vh] w-full"}
      />

      <View className="space-y-[10vh]">
        <Text className="font-medium text-black text-xl capitalize">
          {item.title}
        </Text>
        <Text className="font-normal text-black text-md w-[50vw] ">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default EntCard;

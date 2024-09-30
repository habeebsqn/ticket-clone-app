import { useSplitDate } from "@/hooks/useDateFormatter";
import React from "react";
import { Text, View } from "react-native";

const PlaceHolder = ({
  day,
  date,
  time,
  placeholderColor = "#961489",
}: {
  day: string;
  date: string;
  time: string;
  placeholderColor?: string;
}) => {
  return (
    <View
      className={`rounded-lg bg-[${placeholderColor}] px-2 py-1 justify-center`}
    >
      <Text className="uppercase font-light text-white text-sm ">
        presale: {day && day} • {date && date} • {time && time}
      </Text>
    </View>
  );
};

export default PlaceHolder;

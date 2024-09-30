import React from "react";
import { ImageBackground, View, Text, Image } from "react-native";
import PlaceHolder from "./placeHolder";
import { useSplitDate } from "@/hooks/useDateFormatter";

type Props = {
  item: {
    id: number;
    Title: string;
    date: string;
    image: any;
    authorLogo: any;
    city: string;
    location: string;
  };
};

const OffersCard = ({ item }: Props) => {
  const { day, date, time } = useSplitDate(item?.date);
  return (
    <View className="space-y-[7vh] max-w-[85vw]">
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        blurRadius={2}
        className="h-[30vh]  justify-end px-[4vw] pb-[3vh]"
        imageStyle={{ borderRadius: 10 }}
      >
        <PlaceHolder date={day} time={time} day={day} />
      </ImageBackground>

      <View className="space-y-[10vh]">
        <View className="flex-row items-center justify-between">
          <Text className="uppercase font-medium text-[#979595] text-md ">
            {day && day} • {date && date} • {time && time}
          </Text>
          <Image
            source={item.authorLogo}
            className="h-[30] w-[30]"
            resizeMode="cover"
          />
        </View>

        <Text className=" font-bold text-gray-800 text-xl">{item.Title}</Text>
        <Text className="capitalize font-normal text-[#979595] text-md ">
          {item.city} • {item.location}
        </Text>
      </View>
    </View>
  );
};

export default OffersCard;

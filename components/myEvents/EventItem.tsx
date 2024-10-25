import React from "react";
import { ImageBackground, Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { useSplitDate } from "@/hooks/useDateFormatter";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedView } from "../ThemedView";
import { useRouter } from "expo-router";

type myEvent = {
  item: {
    title: string;
    date: string;
    day: string;
    month: string;
    venue: string;
    imgURL: any;
    tickets?: number;
    past: boolean;
    ticketCount: string;
  };
  past?: boolean;
};

const EventItem = ({ item }: myEvent) => {
  // const { day, date, time } = useSplitDate(item?.date);
  const router = useRouter();

  const toTickets = (eventId: any) => {
    router.push(`/(drawers)/my-events/6/tickets`);
  };

  return (
    <Pressable onPress={toTickets}>
      <ImageBackground
        source={{ uri: item.imgURL }}
        resizeMode="cover"
        className={`h-[25vh] ${
          item?.past ? "justify-between" : "justify-end"
        } pb-[2vh]  bg-black opacity-100 overflow-hidden rounded-2xl`}
        imageStyle={{ borderRadius: 8 }}
      >
        {item?.past && (
          <ThemedView className="bg-[#353434] p-1 items-center myrounded-t-sm">
            <ThemedText className="text-white uppercase text-xs">
              Past event
            </ThemedText>
          </ThemedView>
        )}

        <View className="px-[3vw] space-y-[10vh]">
          <ThemedText type="defaultSemiBold" className="text-white font-medium">
            {item?.title}
          </ThemedText>

          <ThemedText
            type="defaultSemiBold"
            className="capitalize font-normal text-white text-xs"
          >
            {/* {item?.day} •{item?.month} {item?.date} • {time && time} • {item?.venue} */}
            {item?.day} •{item?.month} {item?.date} • {item?.venue}
          </ThemedText>

          <View className="flex-row space-x-3 items-center">
            <Ionicons size={15} name="ticket" color={"white"} />
            <ThemedText
              type="defaultSemiBold"
              className="capitalize font-normal text-white text-xs"
            >
              {item?.ticketCount} tickets
            </ThemedText>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default EventItem;

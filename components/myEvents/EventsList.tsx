import React from "react";
import { ThemedView } from "../ThemedView";
import { FlatList } from "react-native";
import EventItem from "./EventItem";

type myEvent = {
  events: {
    title: string;
    date: string;
    location: string;
    tickets: number;
    img: any;
  }[];
  past: boolean;
};

const EventsList = ({ events, past = false }: myEvent) => {
  return (
    <ThemedView className="flex-1 bg-white px-[3vw] py-[2vh]">
      <FlatList
        data={events}
        renderItem={({ item }) => <EventItem item={item} past={past} />}
        contentContainerStyle={{ gap: 15 }}
      />
    </ThemedView>
  );
};

export default EventsList;

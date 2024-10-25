import React, { useEffect } from "react";
import { ThemedView } from "../ThemedView";
import { Alert, FlatList, RefreshControl } from "react-native";
import EventItem from "./EventItem";

import useEvents from "@/apiHooks/use-Get/useEvents";
import { handleAxiosError, handleAxiosErrorTwo } from "@/config/error";

type myEvent = {
  events: {
    title: string;
    date: string;
    day: string;
    month: string;
    venue: string;
    imgURL: any;
    tickets?: number;
    past: boolean;
    ticketCount: string;
  }[];
  isLoading: boolean;
  isRefetching: boolean;
  refetch: () => void;
};

const EventsList = ({
  events,
  isLoading = false,
  isRefetching = false,
  refetch,
}: myEvent) => {
  return (
    <ThemedView className="flex-1 bg-white px-[3vw] py-[2vh]">
      <FlatList
        data={events}
        renderItem={({ item }) => <EventItem item={item} />}
        contentContainerStyle={{ gap: 15 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching || isLoading}
            onRefresh={refetch}
            tintColor={"#EB7824"}
          />
        }
      />
    </ThemedView>
  );
};

export default EventsList;

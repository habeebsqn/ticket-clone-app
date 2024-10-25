import filterEvents from "@/utils/filterEvents";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import {
  Alert,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { myEvents } from "@/constants/myEvents";
import EventsList from "@/components/myEvents/EventsList";
import { handleAxiosErrorTwo } from "@/config/error";
import useEvents from "@/apiHooks/use-Get/useEvents";
import withAuth from "@/components/navigation/withAuth";

// const { pastEvents, upcomingEvents, totalPastEvents, totalUpcomingEvents } =
//   filterEvents(myEvents);

const index = () => {
  const renderScene = SceneMap({
    first: () => (
      <EventsList
        events={upcomingEvents}
        isLoading={isLoading}
        isRefetching={isRefetching}
        refetch={refetch}
      />
    ),
    second: () => (
      <EventsList
        events={pastEvents}
        isLoading={isLoading}
        isRefetching={isRefetching}
        refetch={refetch}
      />
    ),
  });
  const firstTimeRef = useRef(true);
  const [pastEvents, setPastEvents] = useState<any>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<any>(null);
  // const [totalPastEvents, setTotalPastEvents] = useState<number>(0);
  // const [totalUpcomingEvents, setTotalUpcomingEvents] = useState<number>(0);
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes, setRoutes] = useState([
    {
      key: "first",
      title: `UPCOMING (${0})`,
    },
    { key: "second", title: `PAST (${0})` },
  ]);

  const {
    isLoading,
    data,
    error,
    isLoadingError,
    isRefetching,
    isRefetchError,
    refetch,
  }: any = useEvents();

  useEffect(() => {
    if ((isLoadingError && !isLoading) || (isRefetchError && !isRefetching)) {
      const errorMessage = handleAxiosErrorTwo(error);
      Alert.alert("Error", errorMessage);
      return;
    }

    if (data && (!isLoading || !isRefetching)) {
      if (data?.data) {
        const upcomingEvents = data?.data.filter((event: any) => !event?.past);
        const pastEvents = data?.data.filter((event: any) => event?.past);
        setPastEvents(pastEvents);
        setUpcomingEvents(upcomingEvents);
        // setTotalPastEvents(pastEvents.length);
        // setTotalUpcomingEvents(upcomingEvents.length);
        setRoutes([
          {
            key: "first",
            title: `UPCOMING (${upcomingEvents.length})`,
          },
          { key: "second", title: `PAST (${pastEvents.length})` },
        ]);
      } else {
        setPastEvents(null);
        setUpcomingEvents(null);
        // setTotalPastEvents(0);
        // setTotalUpcomingEvents(0);
      }
    }
  }, [data, isLoadingError, isLoading, isRefetchError, isRefetching, error]);

  useFocusEffect(
    useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch])
  );

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "white" }}
            style={{ backgroundColor: "black" }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default withAuth(index);

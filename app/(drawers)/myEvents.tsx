import filterEvents from "@/utils/filterEvents";
import React, { useState } from "react";
import { SafeAreaView, Text, useWindowDimensions, View } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { myEvents } from "@/constants/myEvents";
import EventsList from "@/components/myEvents/EventsList";

const { pastEvents, upcomingEvents, totalPastEvents, totalUpcomingEvents } =
  filterEvents(myEvents);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: () => <EventsList events={upcomingEvents} past={false} />,
  second: () => <EventsList events={pastEvents} past={true} />,
});

const MyEvents = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    {
      key: "first",
      title: `UPCOMING (${totalUpcomingEvents ? totalUpcomingEvents : 0})`,
    },
    { key: "second", title: `PAST (${totalPastEvents ? totalPastEvents : 0})` },
  ]);

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

export default MyEvents;

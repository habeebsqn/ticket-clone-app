import { ThemedText } from "@/components/ThemedText";
import { Stack } from "expo-router";
import { Pressable } from "react-native";

const EventLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ animation: "slide_from_left", headerShown: false }}
      />
      <Stack.Screen
        name="[id]/tickets"
        options={{
          headerShown: true,
          presentation: "modal",
          headerTitle: "My Tickets",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerRight: ({ tintColor }) => (
            <Pressable className="px-[5vw]">
              <ThemedText className="text-white capitalize">Help</ThemedText>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
};

export default EventLayout;

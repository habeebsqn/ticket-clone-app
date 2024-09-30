import { Stack } from "expo-router";

export default function OnboardLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ animation: "slide_from_left", headerShown: false }}
      />
    </Stack>
  );
}

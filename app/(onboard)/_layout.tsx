import { Stack } from "expo-router";

const OnboardLayout = () => {
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
};

export default OnboardLayout;

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();
const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <Stack>
            {/* <Stack.Screen name="(onboard)" options={{ headerShown: false }} /> */}
            <Stack.Screen name="(drawers)" options={{ headerShown: false }} />
            <Stack.Screen
              name="signIn"
              options={{
                headerShown: true,
                headerBackTitle: "",
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTintColor: "white",
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default RootLayout;

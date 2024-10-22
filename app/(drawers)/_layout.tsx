import CustomDrawer from "@/components/navigation/CustomDrawer";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Drawer } from "expo-router/drawer";
import { Pressable, View, Text } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";
import { usePathname } from "expo-router";
import SelectDropDown from "@/components/SelectDropDown";
import { countries } from "@/constants/countries";
const DrawerLayout = () => {
  const colorScheme = useColorScheme();
  const path = usePathname();
  const isMyEventsTicketsPath = /^\/my-events\/[^/]+\/tickets$/.test(path);
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors[colorScheme ?? "light"].tint,
        drawerActiveBackgroundColor: "#979595",
        drawerLabelStyle: { color: "black", textTransform: "capitalize" },
        drawerType: "front",
        drawerStyle: { width: "85%" },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="index"
        options={{
          headerShown: true,
          drawerLabel: "discover",
          drawerIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={focused ? "#0a7ea4" : "black"}
              size={15}
            />
          ),
          title: "ticketMaster",
          headerTintColor: "white",
          headerTitleAlign: "center",

          headerStyle: {
            backgroundColor: "black",
          },

          headerRight: ({ pressColor, pressOpacity, tintColor }) => (
            <View className="px-4">
              <SelectDropDown
                data={countries}
                displayProperty="value"
                onSelectProperty="value"
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="forYou"
        options={{
          headerShown: true,
          drawerLabel: "For You",
          drawerIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color={focused ? "#0a7ea4" : "black"}
              size={15}
            />
          ),
          title: "For You",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerBackground: () => (
            <View
              style={{
                backgroundColor: "black",
                height: "100%",
                width: "100%",
              }}
            />
          ),

          headerRight: ({ pressColor, pressOpacity, tintColor }) => (
            <Pressable className="px-[5vw]">
              <ThemedText className="text-white capitalize">Help</ThemedText>
            </Pressable>
          ),
        }}
      />
      <Drawer.Screen
        name="my-events"
        options={{
          headerShown: !isMyEventsTicketsPath,
          drawerLabel: "my events",
          drawerIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "ticket" : "ticket-outline"}
              color={focused ? "#0a7ea4" : "black"}
              size={15}
            />
          ),
          title: "My Events",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitle: ({ tintColor, allowFontScaling, children, style }) => (
            <View className="flex-row  items-center">
              <Text className={`text-${tintColor} font-semibold text-lg mr-2`}>
                {children}
              </Text>
              <SelectDropDown
                data={countries}
                displayProperty="value"
                onSelectProperty="value"
                size={5}
              />
            </View>
          ),

          headerStyle: {
            backgroundColor: "black",
          },

          headerRight: ({ pressColor, pressOpacity, tintColor }) => (
            <Pressable className="px-[5vw]">
              <ThemedText className="text-white capitalize">Help</ThemedText>
            </Pressable>
          ),
        }}
      />
      <Drawer.Screen
        name="sell"
        options={{
          headerShown: true,
          drawerLabel: "Sell",
          drawerIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cash" : "cash-outline"}
              color={focused ? "#0a7ea4" : "black"}
              size={15}
            />
          ),
          title: "Sell Your Tickets",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerBackground: () => (
            <View
              style={{
                backgroundColor: "black",
                height: "100%",
                width: "100%",
              }}
            />
          ),

          headerRight: ({ pressColor, pressOpacity, tintColor }) => (
            <Pressable className="px-[5vw]">
              <ThemedText className="text-white capitalize">Help</ThemedText>
            </Pressable>
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;

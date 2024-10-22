import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  FlatList,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Icon } from "@/components/Icon";
import { ThemedBtn } from "@/components/ThemedBtn";
import { router, usePathname } from "expo-router";
import { ThemedInput } from "@/components/ThemedInput";
import CategoryItem from "@/components/discover/categoryItem";
import { cat } from "@/constants/categories";
import { events } from "@/constants/events";
import HeroCard from "@/components/discover/heroCard";
import EventCard from "@/components/discover/eventCard";
import SectionHeader from "@/components/discover/sectionHeader";
import { offers } from "@/constants/offers";
import OffersCard from "@/components/discover/offersCard";
import { ents } from "@/constants/ent";
import EntCard from "@/components/discover/entCard";

const DiscoverScreen = () => {
  const enableLocation = () => {
    router.replace("/(onboard)");
  };
  return (
    <SafeAreaView className="flex-1 bg-white justify-center">
      <ScrollView className="flex-1">
        {/* section one */}
        <ThemedView
          lightColor="black"
          darkColor="black"
          className=" bg-black py-[2vh] px-[5vw] w-full space-y-4"
        >
          <View className="flex-row items-center w-full ">
            <ThemedInput
              leftIcon={"location-arrow"}
              leftIconColor="blue"
              placeholderTextColor="white"
              placeholder="location"
              style={"bg-black flex-1"}
            />
            <View className="w-[1px] bg-white h-[3vh] mx-4" />
            <ThemedInput
              leftIcon={"location-arrow"}
              leftIconColor="blue"
              placeholderTextColor="white"
              placeholder="location"
              style={"bg-black flex-1"}
            />
          </View>

          <View className="w-full bg-white h-[1px] " />

          <View className="space-y-4 ">
            <ThemedInput
              rightIcon={"searchengin"}
              rightIconColor="blue"
              placeholderTextColor="#979595"
              placeholder="Search by Artist, Event or Venue"
              style={"w-full"}
            />
            <FlatList
              data={cat}
              renderItem={({ item }) => <CategoryItem item={item} />}
              keyExtractor={({ name }) => name}
              horizontal
              contentContainerStyle={{ gap: 10 }}
            />
          </View>
        </ThemedView>
        {/* section one */}

        {/* HeroSection */}
        <View>
          <HeroCard
            backgroundImage={require("@/assets/images/bgOne.png")}
            title="Kacey Musgraves"
            btnTile="Find Tickets"
            onPress={() => {}}
            className="min-h-[25vh] max-h-[35vh] justify-evenly px-4"
          />
        </View>
        {/* HeroSection */}

        {/* EventSection */}
        <View className="px-[4vw] py-[5vh]">
          <FlatList
            data={events}
            renderItem={({ item }) => <EventCard item={item} />}
            keyExtractor={({ Title }) => Title}
            contentContainerStyle={{ gap: 25 }}
          />
        </View>
        {/* EventSection */}

        {/* recent section */}

        <View className="px-[4vw] my-[2vh]">
          <SectionHeader title="recently viewed" />
        </View>

        {/* recent section */}

        {/* presales section */}
        <View className="px-[4vw] my-[2vh]">
          <SectionHeader title="SPONSORED PRESALES AND OFFERS" />
        </View>
        <View className="px-[4vw] py-[5vh]">
          <FlatList
            data={offers}
            renderItem={({ item }) => <OffersCard item={item} />}
            keyExtractor={({ id }) => id.toString()}
            contentContainerStyle={{ gap: 25 }}
            horizontal
          />
        </View>
        {/* presales section */}

        {/* popular near you section */}
        <View className="px-[4vw] my-[2vh]">
          <SectionHeader title="POPULAR NEAR YOU" />
        </View>
        {/* popular near you section */}

        {/* entertainment near you section */}
        <View className="px-[4vw] my-[2vh]">
          <SectionHeader title="ENTERTAINMENT GUIDES" />
        </View>

        <View className="px-[4vw] py-[5vh]">
          <FlatList
            data={ents}
            renderItem={({ item }) => <EntCard item={item} />}
            keyExtractor={({ title }) => title}
            contentContainerStyle={{ gap: 25 }}
            horizontal
          />
        </View>

        {/* popular near you section */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default DiscoverScreen;

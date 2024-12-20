import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { SafeAreaView } from "react-native";
import withAuth from "@/components/navigation/withAuth";

const ForYou = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ThemedText>ForYou</ThemedText>
    </SafeAreaView>
  );
};

export default withAuth(ForYou);

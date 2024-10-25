import withAuth from "@/components/navigation/withAuth";
import React from "react";
import { SafeAreaView, Text } from "react-native";

const Tickets = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <Text>Tickets</Text>
    </SafeAreaView>
  );
};

export default withAuth(Tickets);

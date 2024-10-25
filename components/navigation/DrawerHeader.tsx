import React, { useEffect, useState } from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Image } from "react-native";
import { ThemedBtn } from "../ThemedBtn";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";
import { getAuthToken } from "@/config/storage";

const DrawerHeader = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigateToSignIn = async () => {
    if (isAuthenticated) {
      await SecureStore.deleteItemAsync("Auth");
      setIsAuthenticated(false);
    } else {
      router.navigate("/signIn");
    }
  };

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = await getAuthToken("Auth");
      setIsAuthenticated(!!token);
    };

    checkAuthToken();
  }, []);

  return (
    <ThemedView className="bg-black justify-end h-[30vh] space-y-[5]">
      <Image
        source={require("@/assets/images/logo2.png")}
        className="h-20 w-20"
        resizeMode="contain"
      />
      <ThemedBtn
        onPress={navigateToSignIn}
        title={isAuthenticated ? "Logout" : "SignIn"}
        btnStyle="text-white w-full"
        textStyle={{ textAlign: "left" }}
      />
    </ThemedView>
  );
};

export default DrawerHeader;

import React, { useCallback, useEffect, useState } from "react";
import { Redirect, Stack, router, useFocusEffect } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { getAuthToken } from "@/config/storage"; // import your SecureStore function here

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthHOC = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthentication = async () => {
      try {
        const token = await getAuthToken("Auth");
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error fetching auth token:", error);
      } finally {
        setIsLoading(false);
      }
    };
    useEffect(() => {
      checkAuthentication();
    }, []);

    useFocusEffect(
      useCallback(() => {
        checkAuthentication();
      }, [])
    );

    if (isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    if (!isAuthenticated) {
      return router.replace("/signIn");
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;

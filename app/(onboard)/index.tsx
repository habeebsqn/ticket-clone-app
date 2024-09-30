import { StyleSheet, SafeAreaView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Icon } from "@/components/Icon";
import { ThemedBtn } from "@/components/ThemedBtn";
import { router, usePathname } from "expo-router";

const LocationScreen = () => {
  const enableLocation = () => {
    router.replace("/(drawers)");
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ThemedView style={styles.containerOne}>
        <ThemedText type="defaultSemiBold" style={styles.text}>
          Enable location and keep up to date on events happening near you.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.containerTwo}>
        <Icon
          name={"map-location"}
          color={"blue"}
          size={100}
          style={styles.icon}
        />

        <ThemedBtn
          title="Continue"
          type="secondary"
          style={styles.btn}
          onPress={() => enableLocation()}
        />
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  containerOne: {
    flex: 3,
    backgroundColor: "#1E252D",
    justifyContent: "center",
  },
  containerTwo: {
    flex: 6,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 50,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
  },
  btn: {
    width: "50%",
  },
});

export default LocationScreen;

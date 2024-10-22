import {
  Text,
  type TextProps,
  StyleSheet,
  type PressableProps,
  View,
  Pressable,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedBtnProps = PressableProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "primary" | "secondary" | "danger";
  textStyle?: any;
  btnStyle?: string;
  bgColor?: string | string;
  onPress: () => void;
  title: string;
};

export function ThemedBtn({
  style,
  lightColor,
  darkColor,
  type,
  textStyle,
  bgColor = "transparent",
  onPress,
  title,
  btnStyle,
  ...rest
}: ThemedBtnProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <View
      style={[
        styles.btnContainer,
        {
          backgroundColor:
            type === "default"
              ? "gray"
              : type === "primary"
              ? "yellow"
              : type === "secondary"
              ? "blue"
              : type === "danger"
              ? "red"
              : bgColor,
        },
      ]}
      className={`w-[40vh]   ${btnStyle} `}
      {...rest}
    >
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={onPress}
        style={({ pressed }) => [
          styles.pressContainer,
          pressed && { opacity: 0.5 },
        ]}
      >
        <Text style={[{ color }, styles.title, textStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    overflow: "hidden",
  },
  pressContainer: {
    padding: 10,
    justifyContent: "center",
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 32,
    color: "white",
    textAlign: "center",
  },
});

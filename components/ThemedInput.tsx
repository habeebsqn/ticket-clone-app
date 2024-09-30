import { StyleSheet, type TextInputProps, TextInput, View } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Icon } from "./Icon";

export type ThemedTextProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  inputValue?: string;
  onChangeText?: (text: string) => void;
  rightIcon?: string;
  leftIcon?: string;
  leftIconColor?: string;
  rightIconColor?: string;
  backgroundColor?: string;
  focusBorderColor?: string;
  placeholderTextColor?: string;
  iconSize?: number;
  style?: string;
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  inputValue,
  rightIcon,
  leftIconColor,
  rightIconColor,
  leftIcon,
  backgroundColor = "bg-white",
  focusBorderColor = "border-blue-500",
  placeholderTextColor = "#979595",
  iconSize = 20,
  onChangeText,
  ...rest
}: ThemedTextProps) {
  return (
    <View
      className={`flex-row items-center space-x-2 p-2 rounded-md ${backgroundColor} ${style} focus:border ${focusBorderColor} shadow-md `}
    >
      {leftIcon && (
        <Icon name={leftIcon} size={iconSize} color={leftIconColor} />
      )}
      <TextInput
        onChangeText={(text) => {
          onChangeText?.bind(null, text);
        }}
        value={inputValue}
        {...rest}
        className={`text-black text-sm sm:text-xs w-[90%] justify-center px-[4vw] `}
        placeholderTextColor={placeholderTextColor}
      />
      {rightIcon && (
        <Icon name={rightIcon} size={iconSize} color={rightIconColor} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
});

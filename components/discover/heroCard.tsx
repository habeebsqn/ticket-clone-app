import React from "react";
import { ImageBackground } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedBtn } from "../ThemedBtn";

type Props = {
  backgroundImage: any;
  title: string;
  btnTile: string;
  className: string;
  onPress: () => void;
};

const HeroCard = ({
  backgroundImage,
  title,
  btnTile,
  onPress,
  className,
  ...rest
}: Props) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={backgroundImage}
      {...rest}
      className={className}
    >
      <ThemedText type="title" className="text-white">
        {title}
      </ThemedText>
      <ThemedBtn
        title={btnTile}
        onPress={onPress}
        bgColor="#024DDF"
        btnStyle="rounded-md w-[30vw]"
      />
    </ImageBackground>
  );
};

export default HeroCard;

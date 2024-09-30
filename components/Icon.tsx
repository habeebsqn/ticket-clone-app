import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function Icon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof FontAwesome6>["name"]>) {
  return <FontAwesome6 style={style} {...rest} />;
}

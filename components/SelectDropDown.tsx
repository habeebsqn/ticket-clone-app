import React, { useState, useRef } from "react";
import { ThemedView } from "./ThemedView";
import SelectDropdown from "react-native-select-dropdown";
import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";

type PickerProps = {
  data: {
    value: string;
    icon?: JSX.Element;
  }[];
  onSelectProperty: string;
  displayProperty: string;
  size?: number;
};

const dropDownButton = (
  selectedItem: any,
  isOpened: boolean,
  first: any,
  size?: number
) => {
  const selected = selectedItem && selectedItem?.icon;
  const initial = first?.icon;

  return (
    <TouchableOpacity>
      <View
        className={`${
          size ? `w-${size} h-${size}` : "w-8 h-8"
        } rounded-full border-2 border-gray-600 overflow-hidden justify-center items-center `}
      >
        <Image
          source={selected ? selected : initial}
          resizeMode={"cover"}
          className="w-full h-full"
        />
      </View>
    </TouchableOpacity>
  );
};

const SelectDropDown = <T extends PickerProps>({
  data,
  onSelectProperty,
  displayProperty,
  size,
}: T) => {
  const [selectedItem, setSelectedItem] = useState<any>(data[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDownRef = React.useRef();
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        // selectedItem(selectedItem[onSelectProperty]);
        // if (handleSelectProduct && selectedItem) {
        //   handleSelectProduct(selectedItem[onSelectProperty]);
        // }
      }}
      renderItem={(item, index, isSelected) => {
        const rowItem = item[displayProperty]?.toLowerCase();
        const icon = item?.icon;
        return (
          <View
            style={{
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 6,
              flexDirection: "row",
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              marginTop: 2,
            }}
          >
            <Text
              className={`uppercase text-blue text-left w-[35vw] ${
                isSelected && "text-black font-bold"
              }`}
            >
              {rowItem}
            </Text>
            <View className=" w-8 h-8 rounded-full border-2 border-gray-600 overflow-hidden justify-center items-center ">
              <Image
                source={icon}
                resizeMode={"cover"}
                className="w-full h-full "
              />
            </View>
          </View>
        );
      }}
      renderButton={(selectedItem, isOpened) => {
        return dropDownButton(selectedItem, isOpened, data[0], size);
      }}
      defaultValue={selectedItem[onSelectProperty]}
      dropdownStyle={{
        width: "50%",
        borderColor: "red",
        position: "absolute",
        left: "45%",
        right: 0,
        borderRadius: 9,
      }}
    />
  );
};

export default SelectDropDown;

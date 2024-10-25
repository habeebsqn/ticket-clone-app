import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";

type Props = {
  title: string;
  style?: any;
  titleStyle?: any;
  isLoading: any;
  loader?: any;
  agreed?: boolean;
};

type FormikProps = {
  handleSubmit: any;
};
const AppFormSubmitBtn = <T extends Props>({
  title,
  style,
  titleStyle,
  isLoading,
  loader,
}: T) => {
  //trigers the onSubmit button on the formfield
  const { handleSubmit }: FormikProps = useFormikContext();

  return (
    <TouchableOpacity
      onPress={handleSubmit}
      className={`p-4 bg-black rounded-md justify-center items-center ${style}`}
      disabled={isLoading}
    >
      {/* added "titleStyle to make the title in the button flexible and customizable" */}
      {isLoading ? (
        <Text className={`text-center text-base font-medium ${titleStyle}`}>
          {loader}
        </Text>
      ) : (
        <Text className={`text-center text-base font-medium ${titleStyle}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppFormSubmitBtn;

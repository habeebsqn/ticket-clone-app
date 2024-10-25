import { useFormikContext } from "formik";
import { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

type FormControlProps = {
  children: ReactNode;
  style?: any;
};

type FormikProps = {
  errors: any;
  touched: any;
  values: any;
};

type TextProps = TextInputProps & {
  name: string;
  style?: any;
};

const AppFormFields = ({ children, style }: FormControlProps) => {
  return <View className={style}>{children}</View>;
};

const textInput = <T extends TextProps>({ name, style, ...other }: T) => {
  const { setFieldTouched, setFieldValue } = useFormikContext();
  const { values }: FormikProps = useFormikContext();
  const inputValue = name ? values[name] : "";

  return (
    <TextInput
      onBlur={() => setFieldTouched(name)}
      onChangeText={(text) => {
        setFieldValue(name, text);
      }}
      value={inputValue}
      {...other}
      className={`p-4 w-full border-2 border-gray-950  ${style}`}
      placeholderTextColor={"gray"}
    />
  );
};

AppFormFields.Input = textInput;

export default AppFormFields;

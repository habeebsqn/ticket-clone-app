import AppFormFields from "@/components/form/AppFields";
import AppForm from "@/components/form/AppForm";
import AppFormSubmitBtn from "@/components/form/AppFormSubmitBtn";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable, Alert } from "react-native";
import * as Yup from "yup";

import useLogin from "@/apiHooks/use-Post/useLogin";
import { handleAxiosError } from "@/config/error";
import { setAuthToken } from "@/config/storage";
import { router } from "expo-router";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const { mutateAsync, isPending } = useLogin();
  //initials values for the registration form
  const initialValues = {
    email: "",
    password: "",
  };

  //Yup library used to handle form validation requirements
  const schema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .label("Email"),

    password: Yup.string()
      .min(8, "Invalid please enter atleast 8 digits")
      .required("Required")
      .label("Password"),
  });

  const handleLoginUser = async (values: any) => {
    console.log(values, "login");
    values.email = values.email?.trim();
    values.password = values.password?.trim();
    mutateAsync(values, {
      onSuccess: async (resData) => {
        const { token }: any = resData?.data;
        await setAuthToken("Auth", { token: token });
        router.replace("/(drawers)");
      },
      onError: (error: any) => {
        const errorText = handleAxiosError(error);
        Alert.alert("Error", errorText);
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white  ">
      <View className="flex-1 justify-start pt-[4vh] px-4 space-y-[10vh]">
        <View className="w-full space-y-[4vh]">
          <ThemedText className="text-lg font-medium capitalize">
            Sign In
          </ThemedText>

          <ThemedText>New to Ticketmaster? Sign Up</ThemedText>
        </View>
        <View>
          <AppForm
            initialValues={initialValues}
            validateSchema={schema}
            onSubmit={handleLoginUser}
          >
            <AppFormFields style={"space-y-[2vh]  my-[1vh]"}>
              <Text className="text-lg capitalize font-medium">email</Text>
              <AppFormFields.Input
                name="email"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
              />
            </AppFormFields>

            <AppFormFields style={"space-y-[2vh] my-[1vh]"}>
              <Text className="text-lg capitalize font-medium">Password</Text>
              <View className=" flex-row items-center w-full border-2 border-black justify-between">
                <AppFormFields.Input
                  name="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="password"
                  secureTextEntry={show}
                  style={"w-[85%] border-0 "}
                />
                <Pressable onPress={() => setShow((prev) => !prev)}>
                  <Text className="text-md font-bold capitalize">SHOW </Text>
                </Pressable>
              </View>
            </AppFormFields>

            <AppFormFields style={" my-[1vh]"}>
              <AppFormSubmitBtn
                isLoading={isPending}
                title="SigIn"
                titleStyle={"text-md text-white"}
                loader={"Loading..."}
              />
            </AppFormFields>
          </AppForm>
        </View>

        <Pressable onPress={() => router.replace("/(drawers)")}>
          <Text className="text-base text-blue-400 font-medium">
            Back to Discovery{" "}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

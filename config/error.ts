import { AxiosError } from "axios";
import { router } from "expo-router";

export const handleAxiosError = (error: AxiosError): string => {
  let errorMessage = "An error occurred. Please try again.";
  if (error?.response === undefined)
    return (errorMessage = "something went wrong check network");

  if (error) {
    const { error: message }: any = error?.response?.data;
    if (message === "Unauthorized") {
      router.replace("/signIn");
    }

    errorMessage = message;
  }
  return errorMessage;
};

export const handleAxiosErrorTwo = (error: AxiosError): string => {
  let errorMessage = "An error occurred. Please try again.";
  if (error && error?.response === undefined) {
    return (errorMessage = "something went wrong check network");
  }

  if (error && error?.response?.data === "Unauthorized") {
    router.replace("/signIn");
    return (errorMessage = "Session Expired");
  }

  const errorMsg: any = error?.response?.data;
  errorMessage = errorMsg;

  return errorMessage;
};

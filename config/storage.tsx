import * as SecureStore from "expo-secure-store";

export const setAuthToken = async (key: string, value: { token: any }) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify({ token: value.token }));
  } catch (error) {
    console.log("error setting data to store", error);
  }
};

export const getAuthToken = async (key: string) => {
  try {
    const session: any = await SecureStore.getItemAsync(key);
    const parseSession = JSON.parse(session);
    return parseSession;
  } catch (error) {
    console.log(error);
  }
};

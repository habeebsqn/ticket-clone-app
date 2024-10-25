import axios from "axios";
import { getAuthToken } from "./storage";

export const postLogin = async (data: LoginData) => {
  return await axios.post<LoginData>(
    `${process.env.EXPO_PUBLIC_API_URL}users/login`,
    data
  );
}; //used

export const getUserEvents = async () => {
  const { token }: { token: string } = await getAuthToken("Auth");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return await axios.get(
    `${process.env.EXPO_PUBLIC_API_URL}events/user-events`,
    {
      headers,
    }
  );
}; //used

export interface LoginData {
  email: string;
  password: string;
}

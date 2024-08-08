import axios from "axios";
import { getCookie } from "../helpers/cookie";
import { toast } from "react-toastify";

export const createAxiosClient = (baseURL: string | undefined) => {
  const token = getCookie();

  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      toast.error(error.message);
      //   if (error.response.status === 401) Router.push("/");
    }
  );

  return client;
};

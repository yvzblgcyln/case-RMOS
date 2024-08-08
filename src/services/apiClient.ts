import { createAxiosClient } from "./axios";

export const axiosAuthClient = createAxiosClient(process.env.NEXT_PUBLIC_AUTH_API_URL);
export const axiosClient = createAxiosClient(process.env.NEXT_PUBLIC_API_URL);

import { authTypes } from "../../types/authTypes";
import { axiosAuthClient } from "../apiClient";

export function login(data: authTypes) {
  return axiosAuthClient.post("/security/createToken", JSON.stringify(data));
}

import { initialGetPeopleValues, initialGetValues } from "../../helpers/consts";
import { addPeopleProps } from "../../types/dataTypes";
import { axiosClient } from "../apiClient";

export function getData() {
  return axiosClient.post("/Procedure/StpRmforKlasik_2", JSON.stringify(initialGetValues));
}

export function getPeople() {
  return axiosClient.post("/Kara/Getir_Kod", JSON.stringify(initialGetPeopleValues));
}
export function addPeople(data: addPeopleProps) {
  return axiosClient.post(
    "/Kara/Getir_Kod",
    JSON.stringify({
      data,
    })
  );
}

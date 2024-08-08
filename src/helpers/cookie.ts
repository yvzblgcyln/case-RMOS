import Cookies from "js-cookie";

export const setCookie = (value: string | any) => {
  Cookies.set("case-token", value, { expires: 7 });
};

export const getCookie = () => {
  const caseToken = Cookies.get("case-token");
  return caseToken;
};

import axiosClient from "./client";

export const registerUser = (body: any) => {
  return axiosClient.post("/auth/register", body);
};

export const loginUser = (body: any) => {
  return axiosClient.post("/auth/login", body);
};

export const sendCodeToMobile = (body: any) => {
  return axiosClient.post("/auth/mobile/send", body);
};

export const verifyCode = (body: any) => {
  return axiosClient.post("/auth/email/verify", body);
};

export const getLoginStatus = () => {
  return axiosClient.get("/auth/checkLoginStatus");
};



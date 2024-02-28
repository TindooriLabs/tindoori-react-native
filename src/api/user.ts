import axiosClient from "./client";

export const updateMobile = (body: any) => {
  return axiosClient.patch("/user/mobile", body);
};

export const getMobile = () => {
  return axiosClient.get("/user/mobile");
};

export const getCurrentScreen = () => {
  return axiosClient.get("/user/currentScreen");
};

export const setCurrentScreen = (body: any) => {
  return axiosClient.patch("/user/currentScreen", body);
};

import axiosClient from "./client";


export const registerUser = (body: any) => {
  return axiosClient.post("/auth/email", body);
};

export const loginUser = (body: any) => {
  return axiosClient.post("/auth/email/login", body);
};

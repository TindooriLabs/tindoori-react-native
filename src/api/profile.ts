import axiosClient from "./client";

export const getFirstName = () => {
  return axiosClient.get("/user/profile/firstName");
};

export const updateFirstName = (body: any) => {
  return axiosClient.patch("/user/profile/firstName", body);
};

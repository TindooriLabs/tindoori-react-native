import * as SecureStore from "expo-secure-store";

export const getItem = async (key: string) => {
  const value = await SecureStore.getItemAsync(key);
  return value;
};

export const setItem = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
    return true;
  } catch (e) {
    return false;
  }
};

export const removeItem = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
    return true;
  } catch (e) {
    return false;
  }
};

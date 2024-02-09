import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth } from "pages/Auth";
import { AppLanguage } from "pages/AppLanguage";
import type { MainNavigatorParamList } from "./types";
import { RegisterNavigator } from "routes/RegisterNavigator";
import { LoginNavigator } from "routes/LoginNavigator";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const { Navigator, Screen } =
  createNativeStackNavigator<MainNavigatorParamList>();

export const MainNavigator = () => {
  const [firstTime, setFirstTime] = useState<string | null>(null);
  useEffect(() => {
    const getAppLanguage = async () => {
      const language = await SecureStore.getItemAsync("isLanguageSelected");
      setFirstTime(language);
    };
    getAppLanguage();
  }, []);
  if (firstTime === null) {
    return null;
  }
  return (
    <Navigator
      screenOptions={{ headerTitle: "", headerTransparent: true }}
      initialRouteName={firstTime ? "Auth" : "AppLanguage"}
    >
      <Screen name="AppLanguage" component={AppLanguage} />
      <Screen
        name="Auth"
        component={Auth}
        options={{
          headerBackVisible: false,
        }}
      />
      <Screen
        name="LoginNavigator"
        component={LoginNavigator}
        options={{ headerShown: false }}
      />
      <Screen
        name="RegisterNavigator"
        component={RegisterNavigator}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { LoginNavigatorParamList } from "./types";
import { Login } from "pages/Login";

const { Navigator, Screen } =
  createNativeStackNavigator<LoginNavigatorParamList>();

export const LoginNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerTitle: "", headerTransparent: true }}
      initialRouteName="Login"
    >
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

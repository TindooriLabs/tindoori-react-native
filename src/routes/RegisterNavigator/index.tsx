import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "pages/Register";
import type { RegisterNavigatorParamList } from "./types";
import { PhoneNumberInput } from "pages/PhoneNumberInput";
import { PhoneNumberVerification } from "pages/PhoneNumberVerification";
import { NameInput } from "pages/NameInput";

const { Navigator, Screen } =
  createNativeStackNavigator<RegisterNavigatorParamList>();

export const RegisterNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerTitle: "", headerTransparent: true }}
      initialRouteName="Register"
    >
      <Screen name="Register" component={Register} />
      <Screen
        name="PhoneNumberInput"
        component={PhoneNumberInput}
        options={{
          headerBackVisible: false,
        }}
      />
      <Screen
        name="PhoneNumberVerification"
        component={PhoneNumberVerification}
      />
      <Screen name="NameInput" component={NameInput} />
    </Navigator>
  );
};

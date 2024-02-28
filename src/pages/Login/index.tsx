import { Alert, Platform, View, Text } from "react-native";
import S from "./styles";
import { Title } from "components/Title";
import { useForm, Controller } from "react-hook-form";
import { ContinueButton } from "components/ContinueButton";
import { TermsAndPolicy } from "components/TermsAndPolicy";
import { OAuth } from "components/OAuth";
import { useTranslation } from "react-i18next";
import type { LoginNavigatorProps } from "routes/LoginNavigator/types";
import { loginUser } from "api/auth";
import { useState } from "react";
import { setItem } from "util/secureStore";
import { errorHandler } from "api/errorHandler";
import * as Application from "expo-application";
import { ModalActivityIndicator } from "components/ModalActivityIndicator";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FieldInput } from "components/FieldInput";

export const Login = ({ navigation }: LoginNavigatorProps) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const deviceType = Platform.OS;
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      let deviceIdObj = {};

      if (deviceType === "android") {
        deviceIdObj = { androidDeviceId: Application.getAndroidId() };
      } else if (deviceType === "ios") {
        deviceIdObj = { appleDeviceId: Application.getIosIdForVendorAsync() };
      }

      const response = await loginUser({
        email: data.email,
        password: data.password,
        // ...deviceIdObj,
      });

      setLoading(false);

      await Promise.all([
        setItem("accessToken", response.data.user),
        setItem("refreshToken", response.data.refreshToken),
        setItem("userId", response.data.userId),
      ]);
      if (response.data.isOnboarding) {
        const state = JSON.parse(response.data.currentScreen);
        if (state?.routes) {
          const registerScreens = state.routes[state.index];
          let routes;
          if (registerScreens) {
            routes = registerScreens.state.routes;
          }
          if (routes && routes.length > 0) {
            for (let i = 0; i < routes.length - 1; i++) {
              if (routes[i].name === "Register") {
                continue;
              }
              navigation.push("RegisterNavigator", { screen: routes[i].name });
            }
            navigation.navigate("RegisterNavigator", {
              screen: routes[routes.length - 1].name,
            });
          } else {
            navigation.navigate("RegisterNavigator", {
              screen: "PhoneNumberInput",
            });
          }
        } else {
          navigation.navigate("RegisterNavigator", {
            screen: "PhoneNumberInput",
          });
        }
      }
    } catch (error: any) {
      setLoading(false);

      let errorData = errorHandler(error);
      Alert.alert("Error", errorData.message);
    }
  };
  return (
    <View style={S.container}>
      <ModalActivityIndicator
        show={loading}
        color="#94E4B4"
        size={wp("25%")}
        showText={false}
      />
      <Title titleText={t("Login.title")} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FieldInput
            onBlur={onBlur}
            onKeyPress={(e: { nativeEvent: { key: string } }) => {
              if (e.nativeEvent.key === " ") {
                onChange(value.substring(0, value.length - 1));
              }
            }}
            value={value}
            onChange={onChange}
            label={t("Shared.emailLabel")}
            isSecure={false}
            marginTop="5.21%"
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FieldInput
            onBlur={onBlur}
            onKeyPress={(e: { nativeEvent: { key: string } }) => {
              if (e.nativeEvent.key === " ") {
                onChange(value.substring(0, value.length - 1));
              }
            }}
            onChange={onChange}
            value={value}
            label={t("Shared.passwordLabel")}
            isSecure={true}
            marginTop="4.03%"
          />
        )}
        name="password"
      />
      <Text style={S.forgotPassword} onPress={() => {}}>
        {t("Login.forgotPasswordText")}
      </Text>
      <ContinueButton
        isBottom={false}
        marginTop="19.19%"
        buttonText={t("Auth.loginButton")}
        disabled={!isDirty || !isValid}
        handleSubmit={handleSubmit(onSubmit)}
      />
      <TermsAndPolicy marginTop="1.9%" />
      <OAuth ruleText={t("Login.OAuthText")} />
    </View>
  );
};

import { View, Text, Platform, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import S from "./styles";
import { TermsAndPolicy } from "components/TermsAndPolicy";
import { ContinueButton } from "components/ContinueButton";
import { Title } from "components/Title";
import { OAuth } from "components/OAuth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "localization/i18n";
import type { RegisterNavigatorProps } from "routes/RegisterNavigator/types";
import { registerUser } from "api/auth";
import { errorHandler } from "api/errorHandler";
import { ModalActivityIndicator } from "../../components/ModalActivityIndicator";
import * as Application from "expo-application";
import { setItem } from "util/secureStore";
import { FieldInput } from "components/FieldInput";

export const Register = ({ navigation }: RegisterNavigatorProps) => {
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
      confirmPassword: "",
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
        let appleDeviceId = await Application.getIosIdForVendorAsync();
        deviceIdObj = { appleDeviceId };
      }

      const response = await registerUser({
        email: data.email,
        password: data.password,
        ...deviceIdObj,
      });

      setLoading(false);

      await Promise.all([
        setItem("accessToken", response.data.user),
        setItem("refreshToken", response.data.refreshToken),
        setItem("userId", response.data.userId),
      ]);

      navigation.navigate("PhoneNumberInput");
    } catch (error: any) {
      setLoading(false);

      let errorData = errorHandler(error);
      Alert.alert("Error", errorData.message);
    }
  };

  const [passwordLengthValid, setPasswordLengthValid] = useState(false);
  const [passwordContainsNumber, setPasswordContainsNumber] = useState(false);
  const [passwordContainsUppercase, setPasswordContainsUppercase] =
    useState(false);
  const [passwordContainsSC, setPasswordContainsSC] = useState(false);
  const checkPassword = () => {
    return (
      passwordLengthValid &&
      passwordContainsNumber &&
      passwordContainsUppercase &&
      passwordContainsSC
    );
  };
  const onChangePassword = (text: string) => {
    setPasswordLengthValid(text.length >= 8);
    setPasswordContainsNumber(/\d/.test(text));
    setPasswordContainsUppercase(/[A-Z]/.test(text));
    setPasswordContainsSC(/[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(text));
  };

  return (
    <View style={S.container}>
      <ModalActivityIndicator
        show={loading}
        color="#94E4B4"
        size={wp("25%")}
        showText={false}
      />
      <Title titleText={t("Register.title")} />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /\S+@\S+\.\S+/,
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
          validate: () => checkPassword(),
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <FieldInput
              onBlur={onBlur}
              onKeyPress={(e: { nativeEvent: { key: string } }) => {
                if (e.nativeEvent.key === " ") {
                  onChange(value.substring(0, value.length - 1));
                }
              }}
              onChange={onChange}
              onChangePassword={onChangePassword}
              value={value}
              label={t("Shared.passwordLabel")}
              isSecure={true}
              marginTop="4.03%"
            />
            <View
              style={{
                ...S.passwordInputGuideline,
                marginLeft: i18n.language === "zh" ? -wp("28.21%") : 0,
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      ...S.passwordInputGuidelineBullet,
                      color: passwordLengthValid ? "#94E4B4" : "#718096",
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text style={S.passwordInputGuidelineText}>
                    {t("Register.passwordLengthGuideline")}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      ...S.passwordInputGuidelineBullet,
                      color: passwordContainsUppercase ? "#94E4B4" : "#718096",
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text style={S.passwordInputGuidelineText}>
                    {t("Register.passwordUpperCaseGuideline")}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", marginLeft: wp("10%") }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      ...S.passwordInputGuidelineBullet,
                      color: passwordContainsNumber ? "#94E4B4" : "#718096",
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text style={S.passwordInputGuidelineText}>
                    {t("Register.passwordNumberGuideline")}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      ...S.passwordInputGuidelineBullet,
                      color: passwordContainsSC ? "#94E4B4" : "#718096",
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text style={S.passwordInputGuidelineText}>
                    {t("Register.passwordSpecialCharacterGuideline")}
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
        name="password"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          validate: (value, formValues) => value === formValues.password,
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
            label={t("Register.confirmPasswordLabel")}
            isSecure={true}
            marginTop="4.03%"
          />
        )}
        name="confirmPassword"
      />
      <ContinueButton
        isBottom={false}
        marginTop="4.27%"
        buttonText={t("Shared.conitnueButton")}
        disabled={!isDirty || !isValid}
        handleSubmit={handleSubmit(onSubmit)}
      />
      <TermsAndPolicy marginTop="1.9%" />
      <OAuth ruleText={t("Register.OAuthText")} />
    </View>
  );
};

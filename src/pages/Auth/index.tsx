import { View, Image, Text, Pressable } from "react-native";

import S from "./styles";
import { TermsAndPolicy } from "components/TermsAndPolicy";
import { ContinueButton } from "components/ContinueButton";
import { useTranslation } from "react-i18next";
import type { MainNavigatorProps } from "routes/MainNavigator/types";
import { useEffect } from "react";

export const Auth = ({ navigation }: MainNavigatorProps) => {
  const { t } = useTranslation();
  const onSubmit = () => {
    navigation.navigate("RegisterNavigator", { screen: "Register" });
  };
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <View style={S.container}>
      <Image
        style={S.logo}
        source={require("../../../assets/tindooriLogo.png")}
      />
      <Text style={S.title}>Tindoori</Text>
      <Text style={S.subtitle}>{t("Auth.subtitle")}</Text>
      <ContinueButton
        marginTop="6.75%"
        buttonText={t("Auth.createAccountButton")}
        handleSubmit={onSubmit}
      />
      <Pressable
        style={S.loginButton}
        onPress={() => {
          navigation?.navigate("LoginNavigator", { screen: "Login" });
        }}
      >
        <Text style={S.loginButtonText}>{t("Auth.loginButton")}</Text>
      </Pressable>
      <TermsAndPolicy marginTop="2.49%" />
    </View>
  );
};

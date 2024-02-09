import { View, Text, Image, TextInput } from "react-native";
import S from "./styles";
import { Title } from "components/Title";
import { useForm, Controller } from "react-hook-form";
import { ContinueButton } from "components/ContinueButton";
import { useTranslation } from "react-i18next";
import type { RegisterNavigatorProps } from "routes/RegisterNavigator/types";
import * as SecureStore from "expo-secure-store";

export const PhoneNumberInput = ({ navigation }: RegisterNavigatorProps) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: any) => {
    const userInfoStr = await SecureStore.getItemAsync("userInfo");
    if (userInfoStr != null) {
      const userInfo = JSON.parse(userInfoStr);
      await SecureStore.setItemAsync(
        "userInfo",
        JSON.stringify({ ...userInfo, mobile: data.phoneNumber })
      );
    //   navigation.navigate("PhoneNumberVerification")
    }
  };
  return (
    <View style={S.container}>
      <Title titleText={t("PhoneNumberInput.title")} />
      <View style={S.phoneNumberInputView}>
        <Image
          source={require("../../../assets/usaFlag.png")}
          style={S.usaFlag}
        />
        <Text style={S.usText}>US</Text>
        <Text style={S.countryCode}>+1</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 10,
            maxLength: 10,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text.replace(/[^0-9]/g, ""));
              }}
              value={value}
              style={S.phoneNumberText}
              keyboardType="phone-pad"
              maxLength={10}
            />
          )}
          name="phoneNumber"
        />
      </View>
      <View style={S.horizontalRuleView}>
        <View style={S.horizontalRule} />
      </View>
      <Text style={S.verificationText}>
        We will send a code to this number for verification
      </Text>
      <ContinueButton
        marginTop="43.72%"
        buttonText={t("Shared.conitnueButton")}
        disabled={!isDirty || !isValid}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </View>
  );
};

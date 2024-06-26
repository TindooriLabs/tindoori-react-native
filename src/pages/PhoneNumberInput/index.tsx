import { View, Text, Image, TextInput, Alert } from "react-native";
import S from "./styles";
import { Title } from "components/Title";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useForm, Controller } from "react-hook-form";
import { ContinueButton } from "components/ContinueButton";
import { useTranslation } from "react-i18next";
import type { RegisterNavigatorProps } from "routes/RegisterNavigator/types";
import { errorHandler } from "api/errorHandler";
import { getMobile, updateMobile } from "api/user";
import { useEffect, useState } from "react";
import { ModalActivityIndicator } from "components/ModalActivityIndicator";
import { formatPhoneNumber } from "util/phoneNumberFormat";

export const PhoneNumberInput = ({ navigation }: RegisterNavigatorProps) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
    setValue,
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getMobile()
      .then((response) => {
        if (response.data.mobile && response.data.mobile.length === 11) {
          setValue(
            "phoneNumber",
            formatPhoneNumber(response.data.mobile.substring(1)),
            {
              shouldValidate: true,
              shouldDirty: true,
            }
          );
        }
        setLoading(false);
      })
      .catch((e) => {
        let errorData = errorHandler(e);
        Alert.alert("Error", errorData.message);
        setLoading(false);
      });
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    updateMobile({
      mobile: "1" + data.phoneNumber.replace(/\D/g, ""),
    })
      .then((response) => {
        setLoading(false);
        navigation.navigate("PhoneNumberVerification");
      })
      .catch((error) => {
        setLoading(false);
        let errorData = errorHandler(error);

        Alert.alert("Error", errorData.message);
      });
  };

  return (
    <View style={S.container}>
      <ModalActivityIndicator
        show={loading}
        color="#94E4B4"
        size={wp("25%")}
        showText={false}
      />
      <Title titleText={t("PhoneNumberInput.title")} />
      <View style={S.phoneNumberInputView}>
        <Image
          source={require("../../../assets/usaFlag.png")}
          style={S.usaFlag}
        />
        <Text style={S.usText}>{t("PhoneNumberInput.country")}</Text>
        <Text style={S.countryCode}>+1</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 14,
            maxLength: 14,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={(text) => {
                // onChange(text.replace(/[^0-9]/g, ""));
                onChange(formatPhoneNumber(text));
              }}
              value={value}
              style={S.phoneNumberText}
              keyboardType="phone-pad"
              placeholderTextColor="rgba(113, 128, 150, 0.7)"
              maxLength={14}
            />
          )}
          name="phoneNumber"
        />
      </View>
      <View style={S.horizontalRuleView}>
        <View style={S.horizontalRule} />
      </View>
      <Text style={S.verificationText}>
        {t("PhoneNumberInput.verificationText")}
      </Text>
      <ContinueButton
        isBottom={true}
        buttonText={t("Shared.conitnueButton")}
        disabled={!isDirty || !isValid}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </View>
  );
};

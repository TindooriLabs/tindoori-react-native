import { View, Text, Alert } from "react-native";
import S from "./styles";
import { Title } from "components/Title";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useForm, Controller } from "react-hook-form";
import { ContinueButton } from "components/ContinueButton";
import { useTranslation } from "react-i18next";
import type { RegisterNavigatorProps } from "routes/RegisterNavigator/types";
import { errorHandler } from "api/errorHandler";
import { useEffect, useState } from "react";
import { ModalActivityIndicator } from "components/ModalActivityIndicator";
import { FieldInput } from "components/FieldInput";
import { getFirstName, updateFirstName } from "api/profile";
import axios from "axios";

export const NameInput = ({ navigation }: RegisterNavigatorProps) => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFirstName()
      .then((response) => {
        if (response.data.firstName) {
          setValue("firstName", response.data.firstName, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          let errorCode = e.response ? e.response.status : e.code;
          if (errorCode !== 404) {
            let errorData = errorHandler(e);
            Alert.alert("Error", errorData.message);
          }
        } else {
          let errorData = errorHandler(e);
          Alert.alert("Error", errorData.message);
        }

        setLoading(false);
      });
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    updateFirstName({
      firstName: data.firstName,
    })
      .then((response) => {
        setLoading(false);
        // navigation.navigate("PhoneNumberVerification");
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
      <Title titleText={t("NameInput.title")} />
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
            value={value}
            onChange={onChange}
            label={t("NameInput.firstNameLabel")}
            isSecure={false}
            marginTop="4.27%"
          />
        )}
        name="firstName"
      />
      <Text style={S.verificationText}>{t("NameInput.verificationText")}</Text>
      <ContinueButton
        isBottom={true}
        buttonText={t("Shared.conitnueButton")}
        disabled={!isDirty || !isValid}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </View>
  );
};

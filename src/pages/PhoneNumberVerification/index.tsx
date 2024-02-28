import { View, Text, TextInput, Alert, Pressable } from "react-native";
import S from "./styles";
import { Title } from "components/Title";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ContinueButton } from "components/ContinueButton";
import { useTranslation } from "react-i18next";
import type { RegisterNavigatorProps } from "routes/RegisterNavigator/types";

import { errorHandler } from "api/errorHandler";

import { getMobile } from "api/user";
import { useEffect, useRef, useState } from "react";
import { ModalActivityIndicator } from "components/ModalActivityIndicator";
import { formatPhoneNumber } from "util/phoneNumberFormat";
import { sendCodeToMobile, verifyCode } from "api/auth";
import { getItem, setItem } from "util/secureStore";
import { getTime } from "util/timer";

export const PhoneNumberVerification = ({
  navigation,
}: RegisterNavigatorProps) => {
  const { t } = useTranslation();
  const [code, setCode] = useState(Array(6).fill(""));
  const inputRefs = Array(6)
    .fill(0)
    .map((_, i) => useRef<TextInput>(null));
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setLoading(true);
    getMobile()
      .then((response) => {
        if (response.data.mobile && response.data.mobile.length === 11) {
          setMobile(response.data.mobile.substring(1));
        }
        setLoading(false);
      })
      .catch((e) => {
        let errorData = errorHandler(e);
        Alert.alert("Error", errorData.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startTimer = async () => {
      // Retrieve the stored date and time from SecureStore
      const savedDateTime = await getItem("resendDateTime");

      // Calculate the remaining time based on the stored date and time
      if (savedDateTime) {
        const savedTime = new Date(savedDateTime).getTime();
        const currentTime = new Date().getTime();
        const timeDifference = Math.floor((currentTime - savedTime) / 1000);
        const remainingTime = Math.max(60 - timeDifference, 0);
        setTimer(remainingTime);
      }
    };

    startTimer();

    // Start the timer when the component mounts
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const onSubmit = async () => {
    setLoading(true);
    verifyCode({ code: code.join("") })
      .then((response) => {
        setLoading(false);
        navigation.navigate("NameInput");
      })
      .catch((e) => {
        let errorData = errorHandler(e);
        Alert.alert("Error", errorData.message);
        setLoading(false);
      });
  };
  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;

    setCode(newCode);

    if (text && index < 5 && inputRefs[index + 1]) {
      inputRefs[index + 1]?.current?.focus();
    }

    // Check if the code is complete
    if (!newCode.includes("") && newCode.length === 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleKeyPress = (event: any, index: any) => {
    // Check if backspace key is pressed
    if (
      event.nativeEvent.key === "Backspace" &&
      index > 0 &&
      inputRefs[index - 1]
    ) {
      inputRefs[index - 1]?.current?.focus();
      inputRefs[index - 1]?.current?.clear();
    }
  };

  const handleResendCode = async () => {
    // Check if the timer is not active (timer === 0) before allowing to resend
    try {
      if (timer === 0) {
        // Save the current date and time to SecureStore
        await setItem("resendDateTime", new Date().toISOString());

        // Reset the timer to 60 seconds and trigger the resend logic
        setTimer(60);
        setLoading(true);
        const response = await sendCodeToMobile({ mobile: "1" + mobile });
        setLoading(false);
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
      <Title titleText={t("PhoneNumberVerification.title")} />
      <Text style={S.subtext}>
        {t("PhoneNumberVerification.subtextPartOne")} +1{" "}
        {formatPhoneNumber(mobile)},{" "}
        {t("PhoneNumberVerification.subtextPartTwo")}
      </Text>
      <View style={S.codeView}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={S.codeDigit}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            ref={inputRefs[index]}
            onKeyPress={(event) => handleKeyPress(event, index)}
          />
        ))}
      </View>
      <Text style={S.resendCodeTimerText}>
        {timer > 0 && t("Shared.resendCodeTimerText") + " " + getTime(timer)}
      </Text>
      <ContinueButton
       isBottom={true}
        buttonText={t("Shared.conitnueButton")}
        disabled={disabled}
        handleSubmit={onSubmit}
      />
      <Pressable
        style={S.resendCodeView}
        onPress={handleResendCode}
        disabled={timer > 0}
      >
        <Text style={S.resendCodeButtonText}>
          {t("Shared.resendCodeButton")}
        </Text>
      </Pressable>
    </View>
  );
};

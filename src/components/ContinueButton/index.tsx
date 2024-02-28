import { Pressable, Text } from "react-native";
import S from "./styles";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import type { ContinueButtonProps } from "./types";

export const ContinueButton = ({
  marginTop="0%",
  buttonText,
  disabled,
  handleSubmit,
  isBottom=false,
}: ContinueButtonProps) => (
  <Pressable
    style={{
      ...S.continueButton,
      marginTop: isBottom ? hp("83.41%") : hp(marginTop),
      backgroundColor: disabled ? "#D9D9D9" : "#94E4B4",
      position: isBottom ? "absolute" : "relative",
    }}
    onPress={handleSubmit}
    disabled={disabled}
  >
    <Text style={S.continueButtonText}>{buttonText}</Text>
  </Pressable>
);

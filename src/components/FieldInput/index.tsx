import { Text, TextInput, View } from "react-native";
import S from "./styles";
import type { FieldInputProps } from "./types";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const FieldInput = ({
  onBlur,
  onKeyPress,
  value,
  onChange,
  onChangePassword,
  label,
  isSecure,
  marginTop,
}: FieldInputProps) => (
  <View style={{ alignItems: "flex-start", marginTop: hp(marginTop) }}>
    <Text style={S.fieldLabel}>{label}</Text>
    <TextInput
      onBlur={onBlur}
      onChangeText={(text) => {
        onChange(text);
        if (onChangePassword) {
          onChangePassword(text);
        }
      }}
      value={value}
      style={S.fieldInput}
      secureTextEntry={isSecure}
      onKeyPress={onKeyPress}
    />
  </View>
);

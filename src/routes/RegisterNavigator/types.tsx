import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RegisterNavigatorParamList = {
    Register: undefined;
    PhoneNumberInput: undefined;
  };
  
export type RegisterNavigatorProps = NativeStackScreenProps<RegisterNavigatorParamList, keyof RegisterNavigatorParamList>;
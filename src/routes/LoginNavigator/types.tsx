import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type LoginNavigatorParamList = {
    Login: undefined;
  };
  
export type LoginNavigatorProps = NativeStackScreenProps<LoginNavigatorParamList, keyof LoginNavigatorParamList>;
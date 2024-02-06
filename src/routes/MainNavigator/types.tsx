import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainNavigatorParamList = {
    AppLanguage: undefined;
    Auth: undefined;
    Login: undefined;
    Register: undefined;
  };
  
export type MainNavigatorProps = NativeStackScreenProps<MainNavigatorParamList, keyof MainNavigatorParamList>;
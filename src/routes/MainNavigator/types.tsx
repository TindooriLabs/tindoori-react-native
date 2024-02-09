import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { LoginNavigatorParamList } from 'routes/LoginNavigator/types';
import type { RegisterNavigatorParamList } from 'routes/RegisterNavigator/types';

export type MainNavigatorParamList = {
    AppLanguage: undefined;
    Auth: undefined;
    LoginNavigator: NavigatorScreenParams<LoginNavigatorParamList>;
    RegisterNavigator: NavigatorScreenParams<RegisterNavigatorParamList>;
  };
  
export type MainNavigatorProps = NativeStackScreenProps<MainNavigatorParamList, keyof MainNavigatorParamList>;
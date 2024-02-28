import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NavigatorScreenParams } from '@react-navigation/native';
import type { RegisterNavigatorParamList } from 'routes/RegisterNavigator/types';

export type LoginNavigatorParamList = {
    Login: undefined;
    RegisterNavigator: NavigatorScreenParams<RegisterNavigatorParamList>;
  };
  
export type LoginNavigatorProps = NativeStackScreenProps<LoginNavigatorParamList, keyof LoginNavigatorParamList>;
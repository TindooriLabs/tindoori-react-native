import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from 'pages/Login'
import { Auth } from 'pages/Auth'
import { Register } from 'pages/Register'
import { AppLanguage } from 'pages/AppLanguage'
import type { MainNavigatorParamList } from './types'

const { Navigator, Screen } =
  createNativeStackNavigator<MainNavigatorParamList>()

export const MainNavigator = () => {
 

  return (
    <Navigator
      screenOptions={{ headerTitle: '', headerTransparent: true }}
      initialRouteName='AppLanguage'
    >
      <Screen name="AppLanguage" component={AppLanguage} />
      <Screen
        name="Auth"
        component={Auth}
        options={{
          headerBackVisible: false
        }}
      />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  )
}

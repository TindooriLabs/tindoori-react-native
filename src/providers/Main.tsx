import { useCallback, type ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts
} from '@expo-google-fonts/nunito'
import { Inter_500Medium } from '@expo-google-fonts/inter'
import { Ionicons } from '@expo/vector-icons'
import * as SplashScreen from 'expo-splash-screen'

const S = StyleSheet.create({
  container: {
    flex: 1
  }
})

const MainProvider = ({ children }: { children: ReactNode }) => {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Inter_500Medium
  })

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch((error: any) => error)
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View
      style={[S.container, StyleSheet.absoluteFill]}
      onLayout={onLayoutRootView}
    >
      {children}
    </View>
  )
}

export default MainProvider

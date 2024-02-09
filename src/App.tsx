import { registerRootComponent } from 'expo'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import MainProvider from 'providers/Main'
import Routes from 'routes'


SplashScreen.preventAutoHideAsync().catch((error: any) => error)

const App = () => {
  return (
    <MainProvider>
      <Routes />
      <StatusBar style="light" />
    </MainProvider>
  )
}

registerRootComponent(App)

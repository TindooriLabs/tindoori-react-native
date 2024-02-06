import { NavigationContainer } from '@react-navigation/native'

// import { TabNavigator } from './TabNavigator'
import CustomTheme from './theme'
import { MainNavigator } from './MainNavigator'

const Routes = () => (
  <NavigationContainer theme={CustomTheme}>
    <MainNavigator />
  </NavigationContainer>
)

export default Routes

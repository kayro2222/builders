import React from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { RootStackParamList } from './types'
import { Home, Splash } from '@pages'

const Stack = createStackNavigator<RootStackParamList>()

export const Routes: React.FC = () => {
  const hideHeader: StackNavigationOptions = { headerShown: false }

  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Group screenOptions={hideHeader}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

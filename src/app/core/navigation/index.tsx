import React from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { RootStackParamList } from './types'
import { Home } from 'pages'

const Stack = createStackNavigator<RootStackParamList>()

export const StackNavigator: React.FC = () => {
  const hideHeader: StackNavigationOptions = { headerShown: false }

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={hideHeader} />
    </Stack.Navigator>
  )
}

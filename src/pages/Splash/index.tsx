import React, { useEffect } from 'react'
import { Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const Splash = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return <Text style={{ color: 'white' }}>Hello</Text>
}

export { Splash }

import React, { createRef, useEffect } from 'react'
import { Splash } from './src/pages'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { Platform, PermissionsAndroid } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { RootStackParamList } from 'app/core/navigation/types'

const App = (): JSX.Element => {
  const navigationRef = createRef<NavigationContainerRef<RootStackParamList>>()

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization()
    } else {
      const requestLocationPermission = async () => {
        const grantedCoarseLocation = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: 'Location Access Permission',
            message: 'This application requires your location.',
            buttonNeutral: 'Ask me later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        )
        if (grantedCoarseLocation !== PermissionsAndroid.RESULTS.GRANTED) {
          console.error('Request for location permission was denied by user')
        }
      }
      requestLocationPermission()
    }

    // const getLocation = () => {
    //   Geolocation.getCurrentPosition(
    //     () => {},
    //     (error) => console.error(error.message),
    //     { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 },
    //   )
    // }
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {/* <Home /> */}

        <Splash />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export { App }

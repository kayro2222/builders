import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
  Home: undefined
  Weather: undefined
  WeatherDetail: undefined
}

export type EventParams = RouteProp<RootStackParamList, 'Home'>
export type WeatherParams = RouteProp<RootStackParamList, 'Home'>
export type WeatherDetailParams = RouteProp<RootStackParamList, 'Home'>

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList
  }
}

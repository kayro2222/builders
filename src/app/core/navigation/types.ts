import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Weather: undefined
  WeatherDetail: undefined
  Splash: undefined
}

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>
export type WeatherScreenProps = StackScreenProps<RootStackParamList, 'Weather'>
export type WeatherDetailScreenProps = StackScreenProps<RootStackParamList, 'WeatherDetail'>
export type SplashScreenProps = StackScreenProps<RootStackParamList, 'Splash'>

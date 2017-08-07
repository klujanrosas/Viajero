import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Text } from 'react-native'

import Home from '../screens/Home'
import { Header } from '../components/Header'

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'POPULAR DESTINATIONS',
        header: (props) => (<Header {...props} />)
      }
    }
  }
)
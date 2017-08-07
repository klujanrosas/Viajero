import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Navigator from './config/routes'

EStyleSheet.build({
  $lynch: '#5D7D91',
  $sanjuan: '#485661',
  $edward: '#969F9A',
  $cadetblue: '#51A2A9',
  $robroy: '#DFA351',
  $grandis: '#F7D173',
  $white: '#F0F0F0'
  // outline: 1
})

export default () => <Navigator />


import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight } from 'react-native'

import styles from './styles'

const ListItem = ({ text }) => {
  return (
    <TouchableHighlight onPress={() => alert('tigasd')} >
      <View style={styles.row}>
        <Text style={styles.text}>
          { text }
        </Text>
      </View>
    </TouchableHighlight>
  )
}

ListItem.propTypes = {
  text: PropTypes.string
}

export default ListItem

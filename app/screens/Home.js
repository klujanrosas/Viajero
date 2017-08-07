import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { Container } from '../components/Container'
import { ListItem } from '../components/List'

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={['Trujillo', 'Lima', 'Tumbes']}
          renderItem={({ item }) => (
            <ListItem
              text={item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    )
  }
}

export default Home

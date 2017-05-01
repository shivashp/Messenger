import React, { Component } from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';
import { SearchBar } from './widgets';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#EEEEEE'
  }
})

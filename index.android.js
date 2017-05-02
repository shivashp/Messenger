/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Root from './src/Root';
import { SearchBar } from './src/components/widgets'

export default class Messenger extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#EEEEEE'}}>
        <StatusBar
         backgroundColor="black"
         barStyle="light-content"
       />
       <Root />
      </View>
    );
  }
}
AppRegistry.registerComponent('Messenger', () => Messenger);

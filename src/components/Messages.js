import React, { Component } from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';
import { SearchBar } from './widgets';
import { Title } from '@shoutem/ui';

class Messages extends Component {
  render() {
    return(
      <View style={{marginTop:90}}>
        <SearchBar />
      </View>
    )
  }
}

export default Messages;

import React, { Component } from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';
import { SearchBar } from './widgets';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MainScreen from './MainScreen';
import Messages from './Messages';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <ScrollableTabView style={styles.tab}
          tabBarTextStyle={{fontSize:13, fontWeight: '600'}}
          tabBarUnderlineStyle ={{backgroundColor: '#0084ff', height:2}}
          tabBarActiveTextColor={'#0084ff'}>
          <Messages tabLabel="MESSAGES" />
          <MainScreen tabLabel="ACTIVE (58)" />
          <MainScreen tabLabel="GROUPS" />
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#EEEEEE'
  },
  tab: {
    marginTop:56,
    backgroundColor: 'white'
  }
})

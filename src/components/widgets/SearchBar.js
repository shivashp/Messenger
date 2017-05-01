import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity
} from 'react-native';
import { Button, Text, Title, TextInput, Icon, Image } from '@shoutem/ui';

class SearchBar extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.search_icon}>
          <Icon style={StyleSheet.flatten(styles.text_color)} name="search" />
        </View>
        <View style={{flex:6}}>
          <Text style={StyleSheet.flatten(styles.search)}>Search</Text>
        </View>
        <View style={{flex:1}}>
          <Image
            styleName="small-avatar"
            source={{ uri: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p32x32/17883545_1743147219045689_6617885352823046601_n.jpg?oh=e118bdbfb8a190dfb9ffe216528e700e&oe=59BB7B8C'}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    borderBottomWidth:0.5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderColor: '#ccc',
    backgroundColor:'white',
    maxHeight:80,
    position:'absolute',
    top: 0,
    left: 0,
    width:'100%',
    flex:1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  search_icon: {
    flex: 1,
    paddingLeft:0
  },
  text_color: {
    color: '#ccc'
  },
  search: {
    marginTop: 3
  }

})

export default SearchBar;

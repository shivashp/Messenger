import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity
} from 'react-native';
import { Row, Image, Subtitle,Title, Caption, Text, Icon} from '@shoutem/ui';

class SingleMessage extends Component {
  render() {
    console.log(this.props);
    return(
      <TouchableOpacity style={styles.container} activeOpacity={0.5}>
        <View style={styles.left}>
          <Image
            styleName="small-avatar top"
            style={{height:50, width:50, borderRadius:25}}
            source={{ uri: this.props.image }}
          />
        </View>
        <View style={styles.center}>
          <Subtitle style={{fontSize:17}}>{this.props.name}</Subtitle>
          <Text style={{fontSize:13, marginTop:5}}>You: {this.props.message}</Text>
        </View>
        <View  style={styles.right}>
          <Text style={{textAlign: 'right', fontSize: 12}}>{this.props.time}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

SingleMessage.defaultProps = {
  image:"https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p32x32/17883545_1743147219045689_6617885352823046601_n.jpg?oh=e118bdbfb8a190dfb9ffe216528e700e&oe=59BB7B8C",
  name:"Shiva Pandey",
  message:"Hello There",
  time:"11:00 PM"
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  left: {
    flex: 1.8,
  },
  center: {
    flex: 6,
  },
  right: {
    flex: 2,
  }
})

export default SingleMessage;

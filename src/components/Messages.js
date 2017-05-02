import React, { Component } from 'react';
import {
  Text, View, StyleSheet, ScrollView
} from 'react-native';
import { SearchBar, SingleMessage } from './widgets';
import { Title } from '@shoutem/ui';

class Messages extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <SingleMessage image="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p32x32/17191191_622881811238491_259612908399899930_n.jpg?oh=d50c5d80e395dccbde1b342f72e494e0&oe=598E0C62" name="Robus Gauli" message="Last Message" time="07:00 PM"/>
          <SingleMessage image="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/c0.5.32.32/p32x32/18033151_1318005668253315_6832685556987259412_n.jpg?oh=35bcc6ae06769463f09a7a0e786d1e40&oe=5975BE71" name="Anuj Subedi" message="Another Data" time="03:00 AM"/>
          <SingleMessage image="https://scontent.fktm3-1.fna.fbcdn.net/v/t34.0-0/p34x34/15722567_10206014329636559_2128604168_n.jpg?oh=aee7cd5ac00fa3a7da8977cb15c4cdee&oe=590A212A" name="Hamro Sagarmatha" message="Update on news" time="SUN"/>
          <SingleMessage image="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p32x32/18033937_1351270114961375_594235880750998163_n.jpg?oh=cf86173c7e5afd2b9b37532d2d30fdaa&oe=598B00BE" name="Sanjeet Kumar" message="How are you?" time="SAT"/>
          <SingleMessage image="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p32x32/18193736_1313761168700511_9116802803233716255_n.jpg?oh=812f797cee061e9542ae5b12db2c033d&oe=59907B45" name="Subodh Regmi" message="React Native Messenger" time="WED"/>
          <SingleMessage image="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/c0.0.32.32/p32x32/1503908_10200880959936501_1304465705_n.jpg?oh=e16f562f51431cacc82468a0438405f8&oe=59B8D852" name="Aditya Rao" message="How's Fifa going on?" time="26 Apr"/>
          <SingleMessage image="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/c13.0.32.32/p32x32/14448947_1265713620145558_8532153169031220547_n.jpg?oh=738a5f387d2ffb96a4529b541c99bf01&oe=59BE8DED" name="Binam Raj Sharma" message="K cha halkhabar?" time="23 Apr"/>
          <SingleMessage image="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/c0.0.32.32/p32x32/13770376_935101846635846_1768037825588560840_n.jpg?oh=9c72b7f0c72d88ff5067a226765707f0&oe=59833D24" name="Shantosh Yadav" message="Where are you?" time="1 Apr"/>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

export default Messages;

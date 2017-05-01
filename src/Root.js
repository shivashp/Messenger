import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import Messages from './components/Messages';
import { StatusBar } from 'react-native';


export default class Root extends Component {
  render() {
    return(
      <Router hideNavBar = {true} >
        <Scene key="root">
          <Scene key = "home" component = {Home} title = "Home" initial={true}/>
          <Scene key = "messages" component = {Messages} title = "SecondScreen"/>
        </Scene>
      </Router>
    )
  }
}

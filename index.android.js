/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import App from './src/App.js';
export default class React_Navigation extends Component {
  render() {
    return (
      <View style={styles.container}>
          <App />
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'cyan',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      // margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    header: {
      flex: 0.1,
      backgroundColor: 'cyan',
      position: 'relative',
    },
    sidebar:{
        flex: 0.8,
        // display: 'none',
        zIndex: 111,
        backgroundColor: 'red',
    },
    content: {
        flex: 0.3,
        zIndex: 2,
        position: 'relative',
        backgroundColor: 'lightyellow',
    },
    drapwer:{
        flexDirection: 'row',
        flex: 1,
        zIndex: 4,
        position: 'relative',
    },
    footer:{
        flex:0.2,
        backgroundColor: 'steelblue',
        position: 'relative',
    },
    center_flex:{
        alignItems:  'center',
        justifyContent: 'center',  
    },
    hidden:{
        display: 'none',
        // display: ''
    },
    block:{
        // display: 'block',
        flex: 0.8,
    },
  });

  AppRegistry.registerComponent('React_Navigation', () => React_Navigation);

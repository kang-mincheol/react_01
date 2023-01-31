/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text>hello world</Text>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default App;

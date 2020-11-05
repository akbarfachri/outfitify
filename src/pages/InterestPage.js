import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interest from '../components/Interest/Interest'

import {Actions} from 'react-native-router-flux';

export default class InterestPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Interest />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  }
});
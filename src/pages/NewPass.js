import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewPassword from '../components/Password/NewPassword'

import {Actions} from 'react-native-router-flux';

export default class ForgotPass extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewPassword />
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
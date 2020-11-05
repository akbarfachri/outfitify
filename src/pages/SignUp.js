import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormRegis from '../components/Register/FormRegis'

import {Actions} from 'react-native-router-flux';

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FormRegis type="Create Now" />
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
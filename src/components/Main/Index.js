import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity 
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Index extends Component<{}> {

  signup() {
      Actions.signup();
  }
  login() {
      Actions.login();
  }

  render(){
    return(
      <View style={styles.formContainer}>

          <View style={styles.formWrapper}>

              <View style={styles.bodyWrapper}>

                  <View style={styles.logoWrapper}>
                      <Text style={[styles.logo, styles.textCenter]}>LOGO</Text>
                      <Text style={[styles.logText, styles.textCenter]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the telectur</Text> 
                  </View>    

                   <TouchableOpacity onPress={this.signup} style={styles.button}>
                     <Text style={styles.buttonText}>Create Account</Text>
                   </TouchableOpacity>   

                   <TouchableOpacity style={[styles.button, styles.buttonWithIcon, styles.buttonWhite]}>
                     <Icon style={styles.iconButton} name="facebook" size={20} color="#405b78" />
                     <Text style={[styles.buttonText, styles.textBlue]}>Connect Facebook</Text>
                   </TouchableOpacity>         
                     
                   <TouchableOpacity style={[styles.button, styles.buttonWithIcon, styles.buttonWhite]}>
                     <Icon style={styles.iconButton} name="google" size={20} color="#405b78" />
                     <Text style={[styles.buttonText, styles.textBlue]}>Connect Google</Text>
                   </TouchableOpacity>   

                   <View style={styles.accountWrapper}>
                      <Text style={styles.accountText}>Or you can <Text onPress={this.login} style={[styles.textRed, styles.textBold]}>login here</Text></Text> 
                   </View> 
              </View>
              
          </View>
          
      </View>
      )
  }
}

const styles = StyleSheet.create({
  formContainer : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textBold: {
    fontWeight: '500'
  },
  textCenter: {
    textAlign: 'center'
  },
  textBlue: {
    color: '#405b78'
  },
  textRed: {
    color: '#da727e'
  },
  buttonWhite: {
    backgroundColor: '#fff'
  },
  logoWrapper: {

  },
  formWrapper: {
    //backgroundColor: 'blue'  
  },
  bodyWrapper: {
    //backgroundColor: 'yellow'
  },
  buttonWithIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    marginRight: 15
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#405b78',
    borderRadius: 4,
    marginVertical: 5
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'500',
    color:'#fff',
    textAlign:'center'
  },
  logo: {
    fontSize: 50,
    fontWeight: '600',
    color: '#405b78'
  },
  logText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#696969',
    marginVertical: 15,
  },
  accountWrapper: {
    width: 300,
    alignItems: 'center',
    marginVertical: 6
  },
  accountText: {
    color: '#405b78',
    textAlign: 'center',
    lineHeight: 20
  }
  
});
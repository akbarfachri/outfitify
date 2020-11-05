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
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FormLogin extends Component<{}> {

  index() {
    Actions.index()
  }
  signup() {
    Actions.signup()
  }
  forgot() {
    Actions.forgot()
  }

	render(){
		return(
			<View style={styles.formContainer}>

          <View style={styles.formWrapper}>

              <View style={styles.iconWrapper}>
                  <Icon onPress={this.index} style={styles.icon} name="arrow-back" size={30} color="#405b78" />
              </View>

              <View style={styles.bodyWrapper}>

                  <View style={styles.logTitleWrapper}>
                      <Text style={styles.logTitle}>Login</Text>  

                      <Text style={styles.logText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the telectur</Text> 
                  </View>    

                  <View style={styles.inputWrapper}>

                      <TextInput style={styles.inputBox} 
                          underlineColorAndroid='rgba(0,0,0,0)' 
                          placeholder="Email"
                          placeholderTextColor = "#ccc"
                          keyboardType="email-address"
                          onSubmitEditing={()=> this.password.focus()}
                      />
                      <TextInput style={styles.inputBox} 
                          underlineColorAndroid='rgba(0,0,0,0)' 
                          placeholder="Password"
                          secureTextEntry={true}
                          placeholderTextColor = "#ccc"
                          ref={(input) => this.password = input}
                      />  
                  </View>      
                     
                    <View style={styles.forgotWrapper}>
                        <Text onPress={this.forgot} style={[styles.forgotText, styles.textRed, styles.textBold]}>Forgot password?</Text> 
                    </View>   
                       
                    <TouchableOpacity style={styles.button}>
                       <Text style={styles.buttonText}>{this.props.type}</Text>
                    </TouchableOpacity>   

                    <View style={styles.accountWrapper}>
                        <Text style={styles.accountText}>Or you can <Text onPress={this.signup} style={[styles.textRed, styles.textBold]}>create account here</Text></Text> 
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
    alignSelf:'stretch',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textBold: {
    fontWeight: '500'
  },
  textRed: {
    color: '#da727e'
  },
  iconWrapper: {
    height: 80,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    //backgroundColor: 'red'
  },
  formWrapper: {
    flex: 1,
    //backgroundColor: 'blue'  
  },
  bodyWrapper: {
    marginTop: 30,
    //backgroundColor: 'yellow'
  },
  inputBox: {
    height: 50,
    backgroundColor:'rgba(255, 255,255,1)',
    borderRadius: 4,
    paddingHorizontal:16,
    fontSize: 16,
    color:'#405b78',
    marginVertical: 6
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#405b78',
    borderRadius: 4,
    marginVertical: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'500',
    color:'#fff',
    textAlign:'center'
  },
  logTitle: {
    fontSize: 34,
    fontWeight: '300',
    color: '#405b78'
  },
  logText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#696969',
    marginVertical: 15,
  },
  forgotWrapper: {
    alignItems: 'flex-end',
    marginVertical: 6
  },
  forgotText: {

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
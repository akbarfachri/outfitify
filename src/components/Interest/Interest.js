import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Interest extends Component<{}> {

  goBack() {
    Actions.pop()
  }

  render(){
    return(
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.formContainer}>

              <View style={styles.interestWrapper}>

                  <View style={styles.iconWrapper}>
                      <Icon onPress={this.goBack} style={styles.icon} name="arrow-back" size={30} color="#405b78" />
                  </View>

                  <ScrollView
                      vertical={true}
                      showsHorizontalScrollIndicator={false}
                  >

                      <View style={styles.bodyWrapper}>

                          <View style={styles.interestTitleWrapper}>
                              <Text style={styles.interestTitle}>What your interest?</Text>  
                              <Text style={styles.logText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the telectur</Text> 
                          </View>    

                          <View style={styles.tagWrapper}>

                              <View style={styles.tagRow}>

                                  <View style={styles.tagTitleWrapper}>
                                      <Text style={styles.tagTitle}>Trending</Text>
                                  </View>    

                                  <View style={styles.tagSwipeWrapper}>
                                      
                                      <View style={styles.scrollWrapper}>
                                          
                                          <ScrollView
                                              horizontal={true}
                                              showsHorizontalScrollIndicator={false}
                                              contentContainerStyle={{
                                                  alignItems: 'center',
                                                  paddingStart: 20,
                                                  paddingEnd: 12
                                              }}

                                          >
                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Coffee Shop</Text>
                                              </TouchableOpacity>   

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Casual</Text>
                                              </TouchableOpacity>  

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Date</Text>
                                              </TouchableOpacity>  

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Sporty</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Meeting</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Wedding</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag, styles.buttonViewAll]}>
                                                  <Text style={[styles.buttonTagText, styles.tagTextView]}>View all</Text>
                                              </TouchableOpacity>

                                          </ScrollView>
                                          
                                      </View>
                                              
                                  </View>
                              </View>  

                              <View style={styles.tagRow}>

                                  <View style={styles.tagTitleWrapper}>
                                      <Text style={styles.tagTitle}>Category</Text>
                                  </View>    

                                  <View style={styles.tagSwipeWrapper}>
                                      
                                      <View style={styles.scrollWrapper}>
                                          
                                          <ScrollView
                                              horizontal={true}
                                              showsHorizontalScrollIndicator={false}
                                              contentContainerStyle={{
                                                  alignItems: 'center',
                                                  paddingStart: 20,
                                                  paddingEnd: 12
                                              }}

                                          >
                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag, styles.buttonTagSelected]}>
                                                  <Text style={[styles.buttonTagText, styles.buttonTagTextSelected]}>Casual</Text>
                                              </TouchableOpacity>   

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Sporty</Text>
                                              </TouchableOpacity>  

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Girly</Text>
                                              </TouchableOpacity>  

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Formal</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Meeting</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Wedding</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag, styles.buttonViewAll]}>
                                                  <Text style={[styles.buttonTagText, styles.tagTextView]}>View all</Text>
                                              </TouchableOpacity>

                                          </ScrollView>
                                          
                                      </View>
                                             
                                  </View>
                              </View> 

                              <View style={styles.tagRow}>

                                  <View style={styles.tagTitleWrapper}>
                                      <Text style={styles.tagTitle}>Place</Text>
                                  </View>    

                                  <View style={styles.tagSwipeWrapper}>
                                      
                                      <View style={styles.scrollWrapper}>
                                          
                                          <ScrollView
                                              horizontal={true}
                                              showsHorizontalScrollIndicator={false}
                                              contentContainerStyle={{
                                                  alignItems: 'center',
                                                  paddingStart: 20,
                                                  paddingEnd: 12
                                              }}

                                          >
                                                 
                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Coffee Shop</Text>
                                              </TouchableOpacity>  

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Mall</Text>
                                              </TouchableOpacity>  

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag, styles.buttonTagSelected]}>
                                                  <Text style={[styles.buttonTagText, styles.buttonTagTextSelected]}>Wedding</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>College</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>School</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Office</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag, styles.buttonViewAll]}>
                                                  <Text style={[styles.buttonTagText, styles.tagTextView]}>View all</Text>
                                              </TouchableOpacity>

                                          </ScrollView>
                                          
                                      </View>
                                             
                                  </View>
                              </View>  

                               <View style={styles.tagRow}>

                                  <View style={styles.tagTitleWrapper}>
                                      <Text style={styles.tagTitle}>Activity</Text>
                                  </View>    

                                  <View style={styles.tagSwipeWrapper}>
                                      
                                      <View style={styles.scrollWrapper}>
                                          
                                          <ScrollView
                                              horizontal={true}
                                              showsHorizontalScrollIndicator={false}
                                              contentContainerStyle={{
                                                  alignItems: 'center',
                                                  paddingStart: 20,
                                                  paddingEnd: 12
                                              }}

                                          >
                                                 
                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Meeting</Text>
                                              </TouchableOpacity>  

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Interview</Text>
                                              </TouchableOpacity>  

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag, styles.buttonTagSelected]}>
                                                  <Text style={[styles.buttonTagText, styles.buttonTagTextSelected]}>Date</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Study</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Seminar</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag]}>
                                                  <Text style={styles.buttonTagText}>Traveling</Text>
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={this.newpass} style={[styles.button, styles.buttonTag, styles.buttonViewAll]}>
                                                  <Text style={[styles.buttonTagText, styles.tagTextView]}>View all</Text>
                                              </TouchableOpacity>

                                          </ScrollView>
                                          
                                      </View>
                                             
                                  </View>
                              </View> 

                          </View>   
                          
                          <View style={styles.buttonWrapper}>     
                              <TouchableOpacity onPress={this.newpass} style={styles.button}>
                                  <Text style={[styles.buttonText, styles.textBold]}>Submit Interest</Text>
                              </TouchableOpacity>   
                          </View>    

                      </View>

                  </ScrollView>    
              
                </View>
          
          </View>
      </SafeAreaView> 
      )
  }
}

const styles = StyleSheet.create({
  formContainer : {
    flex: 1
  },
  textBold: {
    fontWeight: '500'
  },
  textRed: {
    color: '#da727e'
  },
  iconWrapper: {
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20
  },
  interestWrapper: {
    flex: 1,
    //backgroundColor: 'blue'  
  },
  interestTitleWrapper: {
    paddingLeft: 20,
    paddingRight: 20
  },
  bodyWrapper: {
    marginTop: 20,
    //backgroundColor: 'yellow'
  },
  tagSwipeWrapper: {
    //flexDirection: 'row',
  },
  scrollWrapper: {
    height: 50, 
    alignItems: 'center'
  },
  buttonWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 20
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#405b78',
    borderRadius: 4,
  },
  buttonTag: {
    height: 'auto',
    minWidth: 60,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
  },
  buttonTagSelected: {
      backgroundColor: '#da727e'
  },
  buttonTagTextSelected: {
      color: '#fff'
  },
  buttonViewAll: {
    backgroundColor: 'transparent'
  },
  buttonTagText: {
    fontSize: 14,
    color: '#405b78',
    textAlign: 'center'
  },
  tagTextView: {
    color: '#da727e',
    fontWeight: '500'
  },
  buttonText: {
    fontSize: 16,
    color:'#fff',
    textAlign:'center'
  },
  interestTitle: {
    fontSize: 22,
    fontWeight: '300',
    color: '#405b78'
  },
  logText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#696969',
    marginVertical: 15,
  },
  tagRow: {
    marginBottom: 5
  },
  tagTitleWrapper: {
    paddingLeft: 20,
    paddingRight: 20
  },
  tagTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#405b78'
  }
  
});